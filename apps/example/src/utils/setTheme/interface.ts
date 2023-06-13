import { DARK, LIGHT, THEME_MODE } from './constants';

export interface ITheme {
  type: typeof LIGHT | typeof DARK;
  keyName: typeof THEME_MODE;
}
