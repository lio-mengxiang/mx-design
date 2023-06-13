import { EN_US, ZN_CH } from './constants';
import { en_us } from './lang/en_us';
import { zn_ch } from './lang/zh_ch';

const local = {
  [ZN_CH]: zn_ch,
  [EN_US]: en_us,
} as const;

type Ilocal = typeof local;
export { local };
export type { Ilocal };
