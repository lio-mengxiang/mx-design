import { basic } from './basic';
import { triggerMode } from './triggerMode';
import { differentTrigger } from './differentTrigger';
import { position } from './position';
import { floatingLayer } from './floatingLayer';
import { controlled } from './controlled';
import { mount } from './mount';
import { disabled } from './disabled';
import { dynamic } from './dynamic';

export const exampleList = {
  [basic.namespace]: basic,
  [triggerMode.namespace]: triggerMode,
  [differentTrigger.namespace]: differentTrigger,
  [disabled.namespace]: disabled,
  [position.namespace]: position,
  [floatingLayer.namespace]: floatingLayer,
  [controlled.namespace]: controlled,
  [mount.namespace]: mount,
  [dynamic.namespace]: dynamic,
};
