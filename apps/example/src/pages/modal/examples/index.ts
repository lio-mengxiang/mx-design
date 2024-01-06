import { basic } from './basic';
import { async } from './async';
import { footer } from './footer';
import { feedback } from './feedback';
import { position } from './position';

import { update } from './update';

export const exampleList = {
  [basic.namespace]: basic,
  [async.namespace]: async,
  [footer.namespace]: footer,
  [feedback.namespace]: feedback,
  [position.namespace]: position,
  [update.namespace]: update,
};
