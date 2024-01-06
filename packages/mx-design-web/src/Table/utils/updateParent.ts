import React from 'react';
import { isArray } from '@mx-design/web-utils';
import type { INewRecord } from '../interface';

export function updateParent<T>(
  record: INewRecord<T>,
  selectedKeys: Set<React.Key>,
  indeterminateKeys: Set<React.Key>,
  childrenColumnName: string
) {
  if (record.__INTERNAL_PARENT) {
    const parentKey = record.__INTERNAL_PARENT?.$$key;
    if (isArray(record.__INTERNAL_PARENT[childrenColumnName])) {
      /**
       * total: the length of child record length in it parent
       * len: how many child record is selected
       * flag:
       */
      const total = record.__INTERNAL_PARENT[childrenColumnName].length;
      let len = 0;
      let flag = false;
      record.__INTERNAL_PARENT[childrenColumnName].forEach((c) => {
        if (selectedKeys.has(c.$$key)) {
          len += 1;
        }
        if (indeterminateKeys.has(c.$$key) && !flag) {
          indeterminateKeys.add(parentKey);
          flag = true;
        }
      });

      // all child record is selected
      if (total === len) {
        selectedKeys.add(parentKey);
        indeterminateKeys.delete(parentKey);
        // some child record is selected
      } else if (len > 0 && total > len) {
        selectedKeys.delete(parentKey);
        indeterminateKeys.add(parentKey);
        // no child record is selected
      } else if (len === 0) {
        selectedKeys.delete(parentKey);
        if (!flag) {
          indeterminateKeys.delete(parentKey);
        }
      }
    }

    updateParent(record.__INTERNAL_PARENT, selectedKeys, indeterminateKeys, childrenColumnName);
  }
}
