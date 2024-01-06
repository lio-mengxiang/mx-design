import React, { useContext } from 'react';
import { cs, omit } from '@mx-design/web-utils';
import { usePasswordStore } from '../store';
import { ConfigContext } from '../../ConfigProvider';
import { Input } from './input';
// type
import { InputPasswordProps, RefInputType } from '../interface';

export const Password = React.forwardRef<RefInputType, InputPasswordProps>((props: InputPasswordProps, ref) => {
  const { getPrefixCls } = useContext(ConfigContext);

  const { className, visibilityToggle, onVisibilityChange, ...rest } = props;

  const prefixCls = getPrefixCls('input-password');
  const { visibility, icon } = usePasswordStore({ ...props, prefixCls });

  const classNames = cs(prefixCls, className);

  return (
    <Input
      {...omit(rest, ['visibility', 'defaultVisibility'])}
      type={visibility ? 'text' : 'password'}
      className={classNames}
      ref={ref}
      suffix={icon}
    />
  );
});
