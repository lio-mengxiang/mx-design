import { isArray, isObject } from '@mx-design/web-utils';
// type
import { InternalColumnProps, TableProps } from '../interface';

export function deepCloneColumns<T>(
  data: TableProps<T>['columns'],
  childrenColumnName: TableProps<T>['childrenColumnName']
): [TableProps<T>['columns']] {
  function travel(data: TableProps<T>['columns']) {
    if (!isArray(data)) {
      return [];
    }
    const newData: InternalColumnProps<T>[] = [];
    data.forEach((d) => {
      if (isObject(d)) {
        const _d = { ...d };
        const children = _d[childrenColumnName];
        if (isArray(children) && children.length) {
          _d[childrenColumnName] = travel(children);
        }
        newData.push(_d);
      } else {
        console?.error('table data item must be plain Object type, otherwise the data item will be ignored');
      }
    });

    return newData;
  }

  return [travel(data)];
}
