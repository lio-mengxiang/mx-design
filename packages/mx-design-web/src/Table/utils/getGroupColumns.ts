import { getInternalColumns } from './getInternalColumns';
import { getNodeWidthDepth } from './getNodeWidthDepth';
// type
import type { InternalColumnProps } from '../interface';

export function getGroupColumns({
  headerOperations,
  columnsDepth,
  columns,
  selectionColumnWidth,
  shouldRenderSelectionCol,
}): [InternalColumnProps[][], number] {
  const prefixIndex = Array.isArray(headerOperations) ? headerOperations.filter((opt) => opt.node).length : 0;
  if (columnsDepth === 1) {
    const rows = columns.map((col, index) => ({
      ...col,
      $$columnIndex: index + prefixIndex,
    }));
    return [
      [getInternalColumns({ rows, operations: headerOperations, selectionColumnWidth, shouldRenderSelectionCol, columnsDepth })],
      prefixIndex,
    ];
  }

  let columnIndex = prefixIndex;
  const rows: InternalColumnProps[][] = [];
  /**
   * set rowSpan, colSpan and colSpan range to col. return getGroupColumns
   * columnIndex is the index relative to flattenColumn
   */
  const travel = (columns, depth = 0) => {
    rows[depth] = rows[depth] || [];
    columns.forEach((col) => {
      if (col.children) {
        col.colSpan = getNodeWidthDepth(col);
        col.$$columnIndex = [columnIndex];
        rows[depth].push(col);
        travel(col.children, depth + 1);
        // columnIndex - 1 is the end columnIndex in the col
        col.$$columnIndex.push(columnIndex - 1);
      } else {
        col.rowSpan = columnsDepth - depth;
        col.$$columnIndex = columnIndex++;
        rows[depth].push(col);
      }
    });
  };
  travel(columns);

  rows[0] = getInternalColumns({
    rows: rows[0],
    operations: headerOperations,
    selectionColumnWidth,
    shouldRenderSelectionCol,
    columnsDepth,
  });

  return [rows, prefixIndex];
}
