import { basic } from './basic';
import { different } from './different';
import { update } from './update';
import { customBtn } from './customBtn';
import { customIcon } from './customIcon';
import { customStyle } from './customStyle';
import { position } from './position';

export const exampleList = {
  [basic.namespace]: basic,
  [different.namespace]: different,
  [update.namespace]: update,
  [customBtn.namespace]: customBtn,
  [customIcon.namespace]: customIcon,
  [customStyle.namespace]: customStyle,
  [position.namespace]: position,
};
