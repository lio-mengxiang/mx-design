export function setTableFixedClassName(tableClassList, className) {
  if (!tableClassList.contains(className)) {
    tableClassList.add(className);
  }
}
