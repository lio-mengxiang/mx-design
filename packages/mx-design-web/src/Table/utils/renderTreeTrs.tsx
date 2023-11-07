import React from 'react';
import { Tr } from '../components/tbody/tr';

export function renderTreeTrs<T>({ record, index, rowK, trProps }) {
  const trList: any[] = [];

  trList.push(<Tr key={rowK} rowK={rowK} {...trProps} record={record} index={index} />);

  // const travel = (children, rowKey, level = 0) => {
  //   if (isArray(children) && children.length) {
  //     children.forEach((child, i) => {
  //       if (expandedRowKeys.indexOf(rowKey) !== -1) {
  //         trList.push(<Tr<T> {...trProps} key={getRowKey(child)} record={child} level={level + 1} index={i} />);
  //         if (isChildrenNotEmpty(child)) {
  //           travel(child[childrenColumnName], getRowKey(child), level + 1);
  //         }
  //       }
  //     });
  //   }
  // };
  // if (!er) {
  //   travel(record[childrenColumnName], getRowKey(record));
  // }

  return trList;
}
