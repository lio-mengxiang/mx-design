import { EN_US, ZH_CN } from './constants';
import { mx_en_us } from './lang/en_us';
import { mx_zn_ch } from './lang/zh_ch';
import { transformLocale } from './useLocal/transformLocale';

const mx_local = {
  [ZH_CN]: mx_zn_ch,
  [EN_US]: mx_en_us,
};
export type Ilocal = typeof mx_local;
export { mx_local };
export { transformLocale };
