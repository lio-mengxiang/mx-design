import { setLocalStorage } from '@mx-design/web-utils';
import { THEME } from './constants';

export function setTheme(_setTheme) {
  return (theme) => {
    setLocalStorage(THEME, theme);
    _setTheme(theme);
  };
}
