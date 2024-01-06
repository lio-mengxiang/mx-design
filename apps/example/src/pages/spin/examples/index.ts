import { basic } from './basic';
import { container } from './container';
import { tip } from './tip';
import { delay } from './delay';
import { custom } from './custom';
import { size } from './size';

export const exampleList = {
  [basic.namespace]: basic,
  [container.namespace]: container,
  [tip.namespace]: tip,
  [delay.namespace]: delay,
  [custom.namespace]: custom,
  [size.namespace]: size,
};
