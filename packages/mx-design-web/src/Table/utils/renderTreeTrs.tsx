import React from 'react';
import { isArray } from '@mx-design/web-utils';
import { Tr } from '../components/tbody/tr';
import { isChildrenNotEmpty } from './isChildrenNotEmpty';
import type { INewRecord, TbodyProps } from '../interface';
import type { trPropsType } from '../components/tbody/tbody';

export function renderTreeTrs<T>({
  record,
  index,
  trProps,
  expandedRowKeys,
  er,
}: {
  record: INewRecord<T>;
  index: number;
  trProps: trPropsType<T>;
  expandedRowKeys: TbodyProps['expandedRowKeys'];
  er: (r: any, i: any) => React.ReactNode;
}) {
  const trList: React.ReactNode[] = [];
  const { childrenColumnName } = trProps;

  trList.push(<Tr<T> key={record.$$key} rowK={record.$$key} {...trProps} record={record} index={index} er={er} />);

  const travel = (children, rowKey, level = 0) => {
    if (isArray(children) && children.length) {
      children.forEach((child, i) => {
        if (expandedRowKeys.indexOf(rowKey) !== -1) {
          trList.push(<Tr<T> {...trProps} key={child.$$key} rowK={child.$$key} record={child} level={level + 1} index={i} er={er} />);
          if (isChildrenNotEmpty({ record: child, childrenColumnName })) {
            travel(child[childrenColumnName], child.$$key, level + 1);
          }
        }
      });
    }
  };

  if (!er) {
    travel(record[childrenColumnName], record.$$key);
  }

  return trList;
}
