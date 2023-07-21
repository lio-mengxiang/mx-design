import { basic } from './basic';
import { column } from './column';
import { position } from './position';
import { dense } from './dense';

export const exampleList = {
  [basic.namespace]: basic,
  [column.namespace]: column,
  [position.namespace]: position,
  [dense.namespace]: dense,
};
