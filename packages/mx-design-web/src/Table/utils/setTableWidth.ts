import { getRootDomElement } from './getRootDomElement';

export function setTableWidth({ refTable, hasFixedColumn, scroll, prefixCls, setTableViewWidth }) {
  const root = getRootDomElement(refTable);
  if (root && (hasFixedColumn || (scroll && scroll.x))) {
    const ele = root.querySelector(`.${prefixCls}-body`) || root.querySelector(`.${prefixCls}-content-inner`);
    setTableViewWidth(ele.clientWidth);
  }
}
