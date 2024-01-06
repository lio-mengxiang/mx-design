import { DARK, LIGHT } from './constants';

export interface ITheme {
  type: typeof LIGHT | typeof DARK;
}

export type IThemeList = { themeName: string; content: Record<string, any> }[];
