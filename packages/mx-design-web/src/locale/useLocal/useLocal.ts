import React, { useContext } from 'react';
import { type Ilocal, mx_local } from '../index';
import { transformLocale } from './transformLocale';
import { ConfigContext } from '../../ConfigProvider';

type localeProps<T> = {
  namespace: T;
};

export function useLocale<T extends keyof Ilocal['zn_ch']>({ namespace }: localeProps<T>) {
  const { lang } = useContext(ConfigContext);

  const getLocalConfig = mx_local[lang];

  const componentLocale = React.useMemo<Ilocal[typeof lang][T]>(() => getLocalConfig[namespace], [getLocalConfig, namespace]);

  return [componentLocale, transformLocale] as [
    Ilocal[typeof lang][T],
    (pattern: string, placement?: Record<string, string | number>) => string
  ];
}
