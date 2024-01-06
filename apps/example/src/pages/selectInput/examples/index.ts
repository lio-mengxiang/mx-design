import { basic } from './basic';
import { prefixSuffix } from './prefix-suffix';
import { status } from './status';

export const exampleList = {
  [basic.namespace]: basic,
  [prefixSuffix.namespace]: prefixSuffix,
  [status.namespace]: status,
};
