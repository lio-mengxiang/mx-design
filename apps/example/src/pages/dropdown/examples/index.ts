import { basic } from './basic';
import { differentTrigger } from './differentTrigger';
import { position } from './position';
import { floatingLayer } from './floatingLayer';
import { controlled } from './controlled';
import { mount } from './mount';
import { disabled } from './disabled';
import { dynamic } from './dynamic';

export const exampleList = {
  [basic.namespace]: basic,
  [position.namespace]: position,
  [disabled.namespace]: disabled,
  [differentTrigger.namespace]: differentTrigger,

  // [floatingLayer.namespace]: floatingLayer,
  // [controlled.namespace]: controlled,
  // [mount.namespace]: mount,
  // [dynamic.namespace]: dynamic,
};
