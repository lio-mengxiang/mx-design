import { EN_US, ZN_CH } from './constants';
import { mx_en_us } from './lang/en_us';
import { mx_zn_ch } from './lang/zh_ch';
import { transformLocale } from './useLocal/transformLocale';

const mx_local = {
  [ZN_CH]: mx_zn_ch,
  [EN_US]: mx_en_us,
};
export type Ilocal = typeof mx_local;
export { mx_local };
export { transformLocale };
