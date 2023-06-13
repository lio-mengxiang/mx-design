import { setLocalStorage } from '@mx-design/web-utils';
import { THEME, THEME_MODE } from './constants';

export function setTheme(_setTheme) {
  return (theme, isReRender = true) => {
    setLocalStorage(THEME, theme);
    document.body.setAttribute(THEME_MODE, theme);
    isReRender && _setTheme(theme);
  };
}
