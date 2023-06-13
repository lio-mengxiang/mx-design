import { useEffect, useState } from 'react';
import { getTheme, setTheme } from '@/utils';
import { LIGHT } from '@/utils/setTheme/constants';
import { ITheme } from '@/utils/setTheme/interface';

export function useTheme(): [ITheme['type'], (theme: ITheme['type']) => void] {
  const [theme, changeTheme] = useState<ITheme['type']>((getTheme() as ITheme['type']) || LIGHT);
  const _setTheme = setTheme(changeTheme);
  useEffect(() => {
    _setTheme(theme, false);
  }, []);
  return [theme, _setTheme];
}
