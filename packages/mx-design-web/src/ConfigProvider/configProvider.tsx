import React, { PropsWithChildren, createContext, useCallback, useEffect, useMemo } from 'react';
import { omit } from '@mx-design/web-utils';
import { NotificationProvider } from '../Notification';
import { MessageProvider } from '../Message';
import { ModalProvider } from '../Modal';
import { DrawerProvider } from '../Drawer';
import { useGlobalTheme } from './hooks/useGlobalTheme';
import { defaultProps } from './context';
// types
import type { ConfigProviderProps } from './interface';

export const ConfigContext = createContext<ConfigProviderProps>({
  ...defaultProps,
});

export function MxConfigProvider(baseProps: PropsWithChildren<ConfigProviderProps>) {
  const props = useMemo(() => ({ ...defaultProps, ...baseProps }), [baseProps]);
  const { prefixCls, globalCssVariables, children } = props;
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

  useGlobalTheme(globalCssVariables);

  return (
    <ConfigContext.Provider value={config}>
      <MessageProvider />
      <DrawerProvider />
      <NotificationProvider />
      <ModalProvider />
      {children}
    </ConfigContext.Provider>
  );
}

MxConfigProvider.displayName = 'MxConfigProvider';
