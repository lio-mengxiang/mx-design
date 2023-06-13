import { useState } from 'react';
import { ConfigProviderProps } from '@/components/ConfigProvider';
import { LANG, LANG_LIST, ZN_CH } from '@/locale/constants';
import { setCookieLang } from '@/utils';
import { getCookie } from '@mx-design/web-utils';
import { setCookie } from '@mx-design/web-utils';

export function useLang(): [ConfigProviderProps['lang'], (lang: ConfigProviderProps['lang']) => void] {
  const cookieLang = getCookie(LANG);
  if (!LANG_LIST.includes(cookieLang)) {
    setCookie(LANG, ZN_CH, 365);
  }
  const [lang, setLang] = useState<ConfigProviderProps['lang']>((getCookie(LANG) as ConfigProviderProps['lang']) || ZN_CH);
  const _setLang = setCookieLang(setLang);
  return [lang, _setLang];
}
