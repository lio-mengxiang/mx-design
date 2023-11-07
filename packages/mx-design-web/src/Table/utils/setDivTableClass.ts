import { setTableFixedClassName } from './setTableFixedClassName';

export function setDivTableClass({ hasFixedColumnLeft, hasFixedColumnRight, refTable, prefixCls }) {
  // The outermost div
  const table = refTable.current as HTMLElement;

  if (table) {
    if (hasFixedColumnLeft) {
      setTableFixedClassName(table.classList, `${prefixCls}-has-fixed-col-left`);
    }
    if (hasFixedColumnRight) {
      setTableFixedClassName(table.classList, `${prefixCls}-has-fixed-col-right`);
    }
  }
}
