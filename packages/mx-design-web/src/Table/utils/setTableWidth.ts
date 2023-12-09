import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { getRootDomElement } from './getRootDomElement';
import { TableProps } from '../interface';

export function setTableWidth({
  refTable,
  hasFixedColumn,
  scroll,
  prefixCls,
  setTableViewWidth,
}: {
  refTable: MutableRefObject<HTMLDivElement>;
  hasFixedColumn: boolean;
  scroll: TableProps['scroll'];
  prefixCls: string;
  setTableViewWidth: Dispatch<SetStateAction<number>>;
}) {
  const root = getRootDomElement(refTable);
  if (root && (hasFixedColumn || (scroll && scroll.x))) {
    const ele = root.querySelector(`.${prefixCls}-body`) || root.querySelector(`.${prefixCls}-content-inner`);
    setTableViewWidth(ele.clientWidth);
  }
}
