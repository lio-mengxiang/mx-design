import React, { PropsWithChildren, createContext, useCallback, useMemo } from 'react';
import { omit } from '@mx-design/web-utils';
import { PREFIX_CLS, DEFAULT_LOCALE, DEFAULT_SIZE } from './constants';
import { renderEmpty } from './utils';
import NotificationProvider from '../Notification/notification';
import { MessageProvider } from '../Message';
// types
import type { ConfigProviderProps } from './interface';
import type { IRef } from '../Notification/notification';
import type { IToastRef } from '../Message/messageProvider';

const _notificationRef = React.createRef<IRef>();
const _toastRef = React.createRef<IToastRef>();

const defaultProps: ConfigProviderProps = {
  lang: DEFAULT_LOCALE,
  prefixCls: PREFIX_CLS,
  size: DEFAULT_SIZE,
  renderEmpty,
  getPrefixCls: (componentName: string, customPrefix?: string) => `${customPrefix || defaultProps.prefixCls}-${componentName}`,
  _notificationRef,
  _toastRef,
};

export const ConfigContext = createContext<ConfigProviderProps>({
  ...defaultProps,
});

export function MxConfigProvider(baseProps: PropsWithChildren<ConfigProviderProps>) {
  const props = useMemo(() => ({ ...defaultProps, ...baseProps }), [baseProps]);
  const { prefixCls, children } = props;
  const getPrefixCls = useCallback(
    (componentName: string, customPrefix?: string) => `${customPrefix || prefixCls || defaultProps.prefixCls}-${componentName}`,
    [prefixCls]
  );

  const config: PropsWithChildren<ConfigProviderProps> = useMemo(
    () => ({
      ...omit(props, ['children']),
      getPrefixCls,
    }),
    [getPrefixCls, props]
  );

  return (
    <>
      <MessageProvider ref={_toastRef} />
      <NotificationProvider ref={_notificationRef} />
      <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
    </>
  );
}

MxConfigProvider.displayName = 'ConfigProvider';
