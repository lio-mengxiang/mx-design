import { EN_US, ZH_CN } from './constants';
import { en_us } from './lang/en_us';
import { zh_cn } from './lang/zh_cn';

const local = {
  [ZH_CN]: zh_cn,
  [EN_US]: en_us,
} as const;

type Ilocal = typeof local;
export { local };
export type { Ilocal };
