import React, { useContext, useMemo, forwardRef } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { cs } from '@mx-design/web-utils';
import { ConfigContext } from '../../ConfigProvider';
import { RowContext } from '../context';
import { adaptationGrid, getFlexString, getPaddingStyle } from '../utils';
import type { ColProps } from '../interface';

const defaultProps: ColProps = {
  span: 24,
};

function Col(baseProps: ColProps, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<ColProps>(baseProps, defaultProps, componentConfig?.Col);
  const { gutter, div } = useContext(RowContext);

  const { className, style, children, span, offset, order, pull, push, xs, sm, md, lg, xl, xxl, xxxl, flex, ...rest } = props;

  const prefixCls = getPrefixCls('col');
  const mergeClassName = {
    [`${prefixCls}`]: !div,
    [`${prefixCls}-order-${order}`]: order,
    [`${prefixCls}-${span}`]: !div && !xs && !sm && !md && !lg && !xl && !xxl && !xxxl,
    [`${prefixCls}-offset-${offset}`]: offset,
    [`${prefixCls}-pull-${pull}`]: pull,
    [`${prefixCls}-push-${push}`]: push,
  };

  adaptationGrid({
    prefixCls,
    mergeClassName,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    xxxl,
  });
  const classNames = cs(flex ? prefixCls : mergeClassName, className);

  const paddingStyle = getPaddingStyle(gutter, div);

  const flexStyle = useMemo(() => (getFlexString(flex) ? { flex: getFlexString(flex) } : {}), [flex]);

  return (
    <div
      ref={ref}
      {...rest}
      style={{
        ...style,
        ...paddingStyle,
        ...flexStyle,
      }}
      className={classNames}
    >
      {children}
    </div>
  );
}

const ColComponent = forwardRef(Col);

export { ColComponent as Col };
