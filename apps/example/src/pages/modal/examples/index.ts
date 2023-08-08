import { basic } from './basic';
import { async } from './async';
import { footer } from './footer';
import { close } from './close';
import { position } from './position';
import { showClose } from './showClose';
import { update } from './update';

export const exampleList = {
  [basic.namespace]: basic,
  [async.namespace]: async,
  [footer.namespace]: footer,
  [update.namespace]: update,
  [close.namespace]: close,
  [position.namespace]: position,
  [showClose.namespace]: showClose,
};
