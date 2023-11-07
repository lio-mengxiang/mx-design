import { isArray, isObject } from '@mx-design/web-utils';

export function deepCloneData(data, childrenColumnName) {
  function travel(data) {
    if (!isArray(data)) {
      return [];
    }
    const newData = [];
    data.forEach((d) => {
      // case: [[], []]
      // case: ['', '']
      // case: [1, 2]
      if (!isObject(d)) {
        newData.push(d);
      } else {
        const _d = { ...d };
        _d.__ORIGIN_DATA = d;
        const children = _d[childrenColumnName];
        if (isArray(children)) {
          _d[childrenColumnName] = travel(children);
        }
        newData.push(_d);
      }
    });

    return newData;
  }

  return travel(data);
}
