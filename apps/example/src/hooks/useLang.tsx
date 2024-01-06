import { useState } from 'react';
import { ConfigProviderProps } from '@/components/ConfigProvider';
import { LANG, LANG_LIST, ZH_CN } from '@/locale/constants';
import { setCookieLang } from '@/utils';
import { getCookie } from '@mx-design/web-utils';
import { setCookie } from '@mx-design/web-utils';

export function useLang(): [ConfigProviderProps['lang'], (lang: ConfigProviderProps['lang']) => void] {
  const cookieLang = getCookie(LANG);
  if (!LANG_LIST.includes(cookieLang)) {
    setCookie(LANG, ZH_CN, 365);
  }
  const [lang, setLang] = useState<ConfigProviderProps['lang']>((getCookie(LANG) as ConfigProviderProps['lang']) || ZH_CN);
  const _setLang = setCookieLang(setLang);
  return [lang, _setLang];
}
