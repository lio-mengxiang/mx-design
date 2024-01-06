import React, { FC } from 'react';
import { ConfigProviderProps } from '../ConfigProvider';
import { SpinProps } from './interface';
import { IconLoading } from '../Icon';

interface loadingIconProps {
  prefixCls?: ConfigProviderProps['prefixCls'];
  size?: SpinProps['size'];
  element?: SpinProps['element'];
}

export const LoadingIcon: FC<loadingIconProps> = function (props) {
  const { prefixCls, size, element } = props;

  return <span className={`${prefixCls}-icon`}>{element || <IconLoading spin size={size} />}</span>;
};
