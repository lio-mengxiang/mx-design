import { getLocalStorage } from '@mx-design/web-utils';
import { THEME } from './constants';
import { ITheme } from './interface';

export function getTheme(): ITheme['type'] {
  return getLocalStorage(THEME) as ITheme['type'];
}
