export function setTableFixedClassName(tableClassList: DOMTokenList, className: string) {
  if (!tableClassList.contains(className)) {
    tableClassList.add(className);
  }
}
