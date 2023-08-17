import React, { useContext } from 'react';
import { local } from '../index';
import { transformLocale } from './transformLocale';
import { ConfigContext } from '../../components/ConfigProvider/configProvider';
import { LANG_LIST } from '../constants';
//type
import type { Ilocal } from '../index';

type localeProps<T> = {
  namespace: T;
};

export function useLocale<T extends keyof Ilocal['zh_cn']>({ namespace }: localeProps<T>) {
  const { lang } = useContext(ConfigContext);
  if (!LANG_LIST.includes(lang)) {
    console.error('There is an error in the passed language property');
  }
  const getLocalConfig = local[lang];

  const componentLocale = React.useMemo<Ilocal[typeof lang][T]>(() => getLocalConfig[namespace], [getLocalConfig, namespace]);

  return [componentLocale, transformLocale] as [
    Ilocal[typeof lang][T],
    (pattern: string, placement?: Record<string, string | number>) => string
  ];
}
