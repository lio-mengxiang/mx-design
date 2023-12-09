export function getColumnByDataIndex(field, flattenColumns) {
  return flattenColumns.find((column) => {
    if (field === column.key) return column;
  });
}
