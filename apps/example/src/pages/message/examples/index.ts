import { basic } from './basic';
import { different } from './different';
import { custom } from './custom';
import { close } from './close';
import { position } from './position';
import { showClose } from './showClose';
import { update } from './update';

export const exampleList = {
  [basic.namespace]: basic,
  [different.namespace]: different,
  [custom.namespace]: custom,
  [update.namespace]: update,
  [close.namespace]: close,
  [position.namespace]: position,
  [showClose.namespace]: showClose,
};
