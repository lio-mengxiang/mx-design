import { setCookie } from '@mx-design/web-utils';
import { Dispatch, SetStateAction } from 'react';
import { LANG, LANG_LIST } from '../locale/constants';
import { ConfigProviderProps } from '../components/ConfigProvider';

export const setCookieLang = (_setLang: Dispatch<SetStateAction<ConfigProviderProps['lang']>>) => (lang: ConfigProviderProps['lang']) => {
  if (!LANG_LIST.includes(lang)) return;

  setCookie(LANG, lang, 365);
  _setLang(lang);
};
