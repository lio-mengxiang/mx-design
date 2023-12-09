import { isArray } from '@mx-design/web-utils';

export function getSortData({ _data, compareFn, activeSorters, childrenColumnName }) {
  return _data
    .slice()
    .sort(compareFn(activeSorters))
    .map((item) => {
      if (isArray(item[childrenColumnName])) {
        return {
          ...item,
          [childrenColumnName]: getSortData({ _data: item[childrenColumnName], compareFn, activeSorters, childrenColumnName }),
        };
      }
      return item;
    });
}
