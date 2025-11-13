import { setLocalStorage } from '@mx-design/web-utils';
import { THEME } from './constants';

export function setTheme(_setTheme) {
  return (themeName) => {
    localStorage.setItem(THEME, themeName);

    _setTheme(themeName);
  };
}
