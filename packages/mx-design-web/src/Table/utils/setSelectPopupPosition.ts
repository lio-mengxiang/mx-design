import { TOP, BOTTOM, TL, BL } from '../constants';
import type { TableProps } from '../interface';

export function setSelectPopupPosition(pagePosition: TableProps['pagePosition']) {
  if (pagePosition === TL || pagePosition === BL) {
    return BOTTOM;
  }
  return TOP;
}
