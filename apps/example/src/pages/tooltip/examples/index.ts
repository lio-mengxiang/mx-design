import { basic } from './basic';
import { differentTrigger } from './differentTrigger';
import { position } from './position';
import { floatingLayer } from './floatingLayer';

export const exampleList = {
  [basic.namespace]: basic,
  [differentTrigger.namespace]: differentTrigger,
  [position.namespace]: position,
  [floatingLayer.namespace]: floatingLayer,
};
