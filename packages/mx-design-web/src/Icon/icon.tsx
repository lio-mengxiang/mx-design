import React, { PropsWithChildren, forwardRef, useContext } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { IconProps } from './interface';
import { ConfigContext } from '../ConfigProvider/configProvider';
import { getSize } from './utils';
import { useClassNames } from './hooks';

const defaultProps = {
  size: '1em',
};

export const Icon = forwardRef<SVGSVGElement, PropsWithChildren<IconProps>>((baseProps, ref) => {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps(baseProps, defaultProps, componentConfig?.Icon);
  const { spin, className, size, style, children, ...rest } = props;

  const [width, height] = getSize(size);

  const { iconCls } = useClassNames({ spin: !!spin, getPrefixCls, className });

  return (
    <svg ref={ref} className={iconCls} width={width} height={height} style={style} focusable="false" fill="currentColor" {...rest}>
      {children}
    </svg>
  );
});

Icon.displayName = 'Icon';
