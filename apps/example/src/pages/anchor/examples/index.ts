import { basic } from './basic';
import { affix } from './affix';
import { lineless } from './lineless';
import { scrollBoundary } from './scrollBoundary';

export const exampleList = {
  [basic.namespace]: basic,
  [affix.namespace]: affix,
  [scrollBoundary.namespace]: scrollBoundary,
  [lineless.namespace]: lineless,
};
