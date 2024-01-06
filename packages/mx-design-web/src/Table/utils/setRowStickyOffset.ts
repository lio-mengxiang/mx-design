import { RIGHT } from '../constants';

export function setRowStickyOffset(column, stickyOffsets) {
  const columnIndex = column.$$columnIndex;
  let stickyOffset = 0;
  if (Array.isArray(columnIndex) && columnIndex.length === 2) {
    stickyOffset = column.$$fixed === RIGHT ? stickyOffsets[columnIndex[1]] : stickyOffsets[columnIndex[0]];
  } else if (typeof columnIndex === 'number') {
    stickyOffset = stickyOffsets[columnIndex] || 0;
  }
  return stickyOffset;
}
