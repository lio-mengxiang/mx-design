import React, { useContext, Fragment, forwardRef } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { cs } from '@mx-design/web-utils';
import { ConfigContext } from '../../ConfigProvider';
// type
import { SpaceProps } from '../interface';

const defaultProps: SpaceProps = {
  size: 8,
  direction: 'horizontal',
};

function Space(baseProps: SpaceProps, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<SpaceProps>(baseProps, defaultProps, componentConfig?.Space);
  const { className, style, children, size, direction, align, split, lastOneStyle, ...rest } = props;

  const prefixCls = getPrefixCls('space');

  const innerAlign = align || (direction === 'horizontal' ? 'center' : '');

  const classNames = cs(
    prefixCls,
    {
      [`${prefixCls}-${direction}`]: direction,
      [`${prefixCls}-align-${innerAlign}`]: innerAlign,
    },
    className
  );

  const childrenList = React.Children.toArray(children);

  function getMarginStyle(index) {
    const isLastOne = childrenList.length === index + 1;
    return !isLastOne
      ? {
          [direction === 'vertical' ? 'marginBottom' : 'marginRight']: size,
        }
      : {
          ...lastOneStyle,
        };
  }

  return (
    <div ref={ref} className={classNames} style={style} {...rest}>
      {childrenList.map((child, index) => {
        const shouldRenderSplit = split !== undefined && split !== null && index > 0;
        return (
          <Fragment key={index}>
            {shouldRenderSplit && <div className={`${prefixCls}-item-split`}>{split}</div>}
            <div className={`${prefixCls}-item`} style={getMarginStyle(index)}>
              {child}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

const SpaceComponent = forwardRef<unknown, SpaceProps>(Space);

SpaceComponent.displayName = 'Space';

export { SpaceComponent as Space };
