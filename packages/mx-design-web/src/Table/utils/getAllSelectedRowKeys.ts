import { isArray, isFunction } from '@mx-design/web-utils';
import type { Key } from 'react';
import { getOriginData } from './getOriginData';
import { isChildrenNotEmpty } from './isChildrenNotEmpty';
import type { INewRecord, RowSelectionProps, TableProps } from '../interface';

export function getAllSelectedRowKeys<T>({
  rowSelection,
  childrenColumnName,
  pageData,
}: {
  rowSelection: RowSelectionProps<T>;
  childrenColumnName: TableProps['childrenColumnName'];
  pageData: INewRecord<T>[];
}) {
  const allSelectedRowKeys = new Set<Key>();

  // get all keys
  const travel = (children: INewRecord<T>[]) => {
    if (isArray(children) && children.length) {
      children.forEach((record) => {
        const checkboxProps =
          rowSelection && isFunction(rowSelection.checkboxProps) ? rowSelection.checkboxProps(getOriginData(record)) : {};

        if (!checkboxProps.disabled) {
          allSelectedRowKeys.add(record.$$key);
        }
        if (isChildrenNotEmpty({ record, childrenColumnName })) {
          travel(record[childrenColumnName]);
        }
      });
    }
  };
  travel(pageData);

  return allSelectedRowKeys;
}
