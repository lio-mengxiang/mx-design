import { DEFAULT_OPERATION_WIDTH, INTERNAL_SELECTION_KEY, SELECTION_NODE } from '../constants';
// type
import type { InternalColumnProps } from '../interface';

export function getInternalColumns({ rows, operations, shouldRenderSelectionCol, selectionColumnWidth, columnsDepth = undefined }) {
  const _rows: InternalColumnProps[] = [];
  rows.forEach((r, i) => {
    const _r = { ...r };
    if (i === 0) {
      _r.$$isFirstColumn = true;
    } else {
      _r.$$isFirstColumn = false;
    }
    _rows.push(_r);
  });

  const selectionColumn = shouldRenderSelectionCol && {
    key: INTERNAL_SELECTION_KEY,
    title: INTERNAL_SELECTION_KEY,
    width: selectionColumnWidth,
    $$isOperation: true,
  };

  operations.forEach((operation, i) => {
    if (operation.node) {
      if (operation.name === SELECTION_NODE) {
        rows.unshift({
          ...selectionColumn,
          $$columnIndex: i,
          rowSpan: columnsDepth,
        });
      } else {
        rows.unshift({
          ...operation,
          title: operation.name,
          key: operation.name,
          $$isOperation: true,
          $$columnIndex: i,
          rowSpan: columnsDepth,
        });
      }
    }
  });

  return rows;
}
