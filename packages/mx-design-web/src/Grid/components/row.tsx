import React, { useState, useRef, useContext, forwardRef, useEffect } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { cs, isObject } from '@mx-design/web-utils';
import { ConfigContext } from '../../ConfigProvider';
import { RowProps } from '../interface';
import { responsiveObserve } from '../../utils';
import { getMarginStyle } from '../utils';
import { RowContext } from '../context';
// type
import type { ScreenMap } from '../../utils/interface';

const defaultProps: RowProps = {
  gutter: 0,
  align: 'start',
  justify: 'start',
};

function Row(baseProps: RowProps, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<RowProps>(baseProps, defaultProps, componentConfig?.Row);
  const { className, style, children, div, align, justify, gutter, ...rest } = props;
  const [screens, setScreens] = useState<ScreenMap>({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true,
    xxxl: true,
  });

  const token = useRef<string>();

  // if window's media size change, the function that responsiveObserve subscribe will be trigger
  useEffect(() => {
    token.current = responsiveObserve.subscribe((screens) => {
      if ((!Array.isArray(gutter) && isObject(gutter)) || (Array.isArray(gutter) && (isObject(gutter[0]) || isObject(gutter[1])))) {
        setScreens(screens);
      }
    });

    return () => {
      responsiveObserve.unsubscribe(token.current);
    };
  }, []);

  const prefixCls = getPrefixCls('row');
  const classNames = cs(
    {
      [`${prefixCls}`]: !div,
      [`${prefixCls}-align-${align}`]: align,
      [`${prefixCls}-justify-${justify}`]: justify,
    },
    className
  );
  const { gutterHorizontal, gutterVertical, marginStyle } = getMarginStyle(gutter, screens, div);

  return (
    <div
      ref={ref}
      {...rest}
      style={{
        ...style,
        ...marginStyle,
      }}
      className={classNames}
    >
      <RowContext.Provider value={{ gutter: [gutterHorizontal, gutterVertical], div }}>{children}</RowContext.Provider>
    </div>
  );
}

const RowComponent = forwardRef(Row);

export { RowComponent as Row };

// {...omit(rest, ['gutter'])} have problem
