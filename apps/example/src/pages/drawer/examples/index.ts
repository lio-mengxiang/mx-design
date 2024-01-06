import { basic } from './basic';
import { position } from './position';
import { customizedElement } from './customizedElement';
import { multiLayer } from './multiLayer';
import { mount } from './mount';
// import { update } from './update';

export const exampleList = {
  [basic.namespace]: basic,
  [position.namespace]: position,
  [customizedElement.namespace]: customizedElement,
  [multiLayer.namespace]: multiLayer,
  [mount.namespace]: mount,
  // [update.namespace]: update,
};
