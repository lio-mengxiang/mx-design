import type { CSSProperties } from 'react';
import type { InternalColumnProps } from '../interface';
import { LEFT, RIGHT } from '../constants';

export function getColumnFixedStyle(column: InternalColumnProps, stickyOffset) {
  const columnFixedStyle: CSSProperties = {};

  if (column.$$fixed === LEFT) {
    columnFixedStyle.left = stickyOffset;
  }

  if (column.$$fixed === RIGHT) {
    columnFixedStyle.right = stickyOffset;
  }
  return columnFixedStyle;
}
