import React, { PropsWithChildren, useContext } from 'react';
import { cs } from '@mx-design/web-utils';
import { ConfigContext } from '../ConfigProvider';

interface HoverProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  prefix?: string;
  disabled?: boolean;
  onClick?: (e) => void;
}

export function IconHover(props: PropsWithChildren<HoverProps>) {
  const { children, className, disabled, prefix, ...rest } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('icon-hover');

  return (
    <span
      className={cs(
        prefixCls,
        {
          [`${prefix}-icon-hover`]: prefix,
          [`${prefixCls}-disabled`]: disabled,
        },
        className
      )}
      onClick={props.onClick}
      {...rest}
    >
      {children}
    </span>
  );
}
