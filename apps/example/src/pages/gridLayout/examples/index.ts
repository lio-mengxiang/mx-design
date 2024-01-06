import { basic } from './basic';
import { column } from './column';
import { position } from './position';
import { holyGrail } from './holyGrail';
import { containerAlign } from './containerAlign';
import { containerJustify } from './containerJustify';

export const exampleList = {
  [basic.namespace]: basic,
  [column.namespace]: column,
  [position.namespace]: position,
  [holyGrail.namespace]: holyGrail,
  [containerAlign.namespace]: containerAlign,
  [containerJustify.namespace]: containerJustify,
};
