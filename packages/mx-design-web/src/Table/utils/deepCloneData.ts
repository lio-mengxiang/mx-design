import { isArray, isFunction, isObject } from '@mx-design/web-utils';
import type { Key } from 'react';
import { getRowKey } from './getRowKey';
import { getOriginData } from './getOriginData';
// type
import type { INewRecord, TableProps } from '../interface';

/**
 * clone table data and add key
 */
export function deepCloneData<T>(
  data: TableProps<T>['data'],
  childrenColumnName: TableProps<T>['childrenColumnName'],
  rowKey?: TableProps<T>['rowKey'],
  rowSelection?: TableProps<T>['rowSelection']
): [INewRecord<T>[], INewRecord<T>[], Map<Key, INewRecord<T>>] {
  const dataKeyMap = new Map<Key, INewRecord<T>>();
  const flattenData: INewRecord<T>[] = [];
  function travel(data: TableProps<T>['data'], parent: INewRecord<T>, depth: number = 1) {
    if (!isArray(data)) {
      return [];
    }
    const newData: INewRecord<T>[] = [];
    data.forEach((d, index) => {
      if (isObject(d)) {
        const _d = { ...d } as INewRecord<T>;
        _d.__ORIGIN_DATA = d;
        if (rowKey) {
          _d.$$key = getRowKey(rowKey, d) || `${depth}-${index}`;
          const checkboxProps = isFunction(rowSelection?.checkboxProps) ? rowSelection.checkboxProps(getOriginData(_d)) : {};
          if (!checkboxProps.disabled) {
            dataKeyMap.set(_d.$$key, _d);
          }
        }
        if (parent) {
          _d.__INTERNAL_PARENT = parent;
        }
        const children = _d[childrenColumnName];
        flattenData.push(_d);
        if (isArray(children) && children.length) {
          const _parent = { ..._d };
          const child = travel(children, _parent, depth + 1);
          _d[childrenColumnName] = child;
          _parent[childrenColumnName] = child;
        }
        newData.push(_d);
      } else {
        console?.error('table data item must be plain Object type, otherwise the data item will be ignored');
      }
    });

    return newData;
  }

  return [travel(data, undefined), flattenData, dataKeyMap];
}
