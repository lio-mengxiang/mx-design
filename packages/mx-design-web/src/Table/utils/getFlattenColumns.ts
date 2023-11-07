import { getNodeDepth } from './getNodeDepth';
// type
import type { InternalColumnProps } from '../interface';

function getFinalColumns(columns: InternalColumnProps[]) {
  const rows: InternalColumnProps[] = [];
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
export function getFlattenColumns(columns: InternalColumnProps[]) {
  const { columnsDepth } = getNodeDepth(columns);
  const finalColumns = getFinalColumns(columns);
  return { finalColumns, columnsDepth };
}
