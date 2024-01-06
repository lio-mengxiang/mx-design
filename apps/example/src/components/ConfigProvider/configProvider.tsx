import React, { PropsWithChildren, createContext, useMemo } from 'react';
import type { ConfigProviderProps } from './interface';
import { DEFAULT_LOCALE } from './constants';
import { LANG } from '../../locale/constants';
import { LIGHT, THEME } from '@/utils/setTheme/constants';

const defaultProps: ConfigProviderProps = {
  [LANG]: DEFAULT_LOCALE,
  [THEME]: LIGHT,
};

export const ConfigContext = createContext<ConfigProviderProps>({
  ...defaultProps,
});

export function ConfigProvider(baseProps: PropsWithChildren<ConfigProviderProps>) {
  const config = useMemo(() => ({ ...defaultProps, ...baseProps }), [baseProps]);

  return <ConfigContext.Provider value={config}>{baseProps.children}</ConfigContext.Provider>;
}

ConfigProvider.displayName = 'ConfigProvider';
