import { getNodeDepth } from './getNodeDepth';
// type
import type { ColumnProps } from '../interface';

function getFinalColumns<T>(columns: ColumnProps<T>[]) {
  const rows: ColumnProps<T>[] = [];
  function travel(columns) {
    if (columns && columns.length > 0) {
      columns.forEach((column) => {
        if (!column.children) {
          rows.push({ ...column });
        } else {
          travel(column.children);
        }
      });
    }
  }
  travel(columns);

  return rows;
}

/**
 * @zh 获取到columns所有叶子节点 + columns深度
 * @en Get all the leaf nodes of columns + the depth of columns
 */
export function getFlattenColumns<T>(columns: ColumnProps<T>[]) {
  const { columnsDepth } = getNodeDepth(columns);
  const finalColumns = getFinalColumns<T>(columns);
  return { finalColumns, columnsDepth };
}
