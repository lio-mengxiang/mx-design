import { isArray } from '@mx-design/web-utils';
import { Key } from 'react';
import { updateParent } from './updateParent';
import type { INewRecord, TableProps } from '../interface';

export function getSelectedKeys<T>(
  record: INewRecord<T>,
  checked: boolean,
  selectedRowKeys: Set<Key>,
  indeterminateKeys: Set<Key>,
  childrenColumnName: TableProps['childrenColumnName'],
  checkConnected: boolean
) {
  function loop(record: INewRecord<T>) {
    if (checked) {
      selectedRowKeys.add(record.$$key);
      indeterminateKeys.delete(record.$$key);
    } else {
      selectedRowKeys.delete(record.$$key);
    }
    if (isArray(record[childrenColumnName])) {
      record[childrenColumnName].forEach((child) => {
        loop(child);
      });
    }
  }

  if (!checkConnected) {
    if (checked) {
      selectedRowKeys.add(record.$$key);
    } else {
      selectedRowKeys.delete(record.$$key);
    }
  } else {
    loop(record);
    updateParent(record, selectedRowKeys, indeterminateKeys, childrenColumnName);
  }

  return {
    selectedRowKeys,
    indeterminateKeys,
  };
}
