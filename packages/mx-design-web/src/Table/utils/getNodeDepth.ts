import type { InternalColumnProps } from '../interface';

/**
 * @zh 获取表头深度, 并自动增加key属性
 * @en get the header depth, and add key property
 */
export function getNodeDepth(columns: InternalColumnProps[], depth = 1) {
  let columnsDepth: number = 0;

  function dfs(columns: InternalColumnProps[], depth, rootColumnsIndex) {
    for (let i = 0, len = columns.length; i < len; i++) {
      const col = columns[i];
      if (!col.key) col.key = col.dataIndex || `${depth}-${i}`;

      if (depth > columnsDepth) {
        columnsDepth = depth;
      }
      if (col?.children?.length) {
        dfs(col.children, depth + 1, rootColumnsIndex);
      }
    }
  }

  dfs(columns, depth, undefined);
  return { columnsDepth };
}
