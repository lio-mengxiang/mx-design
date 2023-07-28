import { useEffect, useState } from 'react';
import { darkTheme, lightTheme } from '@mx-design/web';
import { getTheme, setTheme } from '@/utils';
import { DARK, LIGHT } from '@/utils/setTheme/constants';
// types
import { ITheme } from '@/utils/setTheme/interface';

export function useTheme(): [ITheme['type'], (theme: ITheme['type']) => void] {
  const [theme, changeTheme] = useState<ITheme['type']>((getTheme() as ITheme['type']) || LIGHT);
  const _setTheme = setTheme(changeTheme);
  useEffect(() => {
    _setTheme(theme);
  }, []);
  return [theme, _setTheme];
}

export const themeMap = { [LIGHT]: lightTheme, [DARK]: darkTheme };
