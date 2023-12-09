/* eslint-disable default-param-last */
import React from 'react';
import { isArray, isNullOrUndefined } from '@mx-design/web-utils';
import { updateParent } from './updateParent';
import type { INewRecord, TableProps } from '../interface';

/**
 * if checkConnected is true, it represent we should handle this situation that child node must also be selected when it's selected by patent,
 * or patent should be selected or indeterminate when it's selected by child. In either case, we traverse data from bottom to top,
 * which can solve this problem simply
 */
export function getSelectedKeysByData<T>({
  clonedDataKeysMap,
  checkedKeys,
  childrenColumnName,
  checkConnected,
  indeterminateKeys,
  isControlledIndeterminateKeys,
  isControlledSelectedRowKeys,
}: {
  clonedDataKeysMap: Map<string | number, INewRecord<T>>;
  checkedKeys: Set<React.Key>;
  childrenColumnName: TableProps['childrenColumnName'];
  checkConnected: boolean;
  indeterminateKeys: Set<React.Key>;
  isControlledIndeterminateKeys: boolean;
  isControlledSelectedRowKeys: boolean;
}) {
  // checkConnected mean parent record is associated with child record
  if (!checkConnected) {
    return [checkedKeys, indeterminateKeys];
  }

  if (isControlledIndeterminateKeys && isControlledSelectedRowKeys) {
    return [checkedKeys, indeterminateKeys];
  }

  // Traverse from bottom to top
  function loop(record) {
    checkedKeys.add(record.$$key);
    indeterminateKeys.delete(record.$$key);

    if (isArray(record[childrenColumnName])) {
      record[childrenColumnName].forEach((child) => {
        loop(child);
      });
    }
  }

  for (const key of checkedKeys) {
    const record = clonedDataKeysMap.get(key);
    if (!isNullOrUndefined(record)) {
      loop(record);
      updateParent(record, checkedKeys, indeterminateKeys, childrenColumnName);
    }
  }

  return [checkedKeys, indeterminateKeys];
}
