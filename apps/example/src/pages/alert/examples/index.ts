import { basic } from './basic';
import { title } from './title';
import { closable } from './closable';
import { type } from './type';
import { operation } from './operation';
import { noIcon } from './noIcon';
import { custom } from './custom';

export const exampleList = {
  [basic.namespace]: basic,
  [title.namespace]: title,
  [closable.namespace]: closable,
  [type.namespace]: type,
  [operation.namespace]: operation,
  [noIcon.namespace]: noIcon,
  [custom.namespace]: custom,
};
