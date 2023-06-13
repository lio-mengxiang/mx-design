import { THEME } from './constants';
import { ITheme } from './interface';
import { getLocalStorage } from '@mx-design/web-utils';

export function getTheme(): ITheme['type'] {
  return getLocalStorage(THEME) as ITheme['type'];
}
