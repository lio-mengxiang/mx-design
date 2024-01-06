import { isArray, isObject } from '@mx-design/web-utils';

export function getOriginData(data) {
  if (isObject(data)) {
    return data.__ORIGIN_DATA;
  }

  if (!data || !isArray(data)) {
    return data;
  }

  return data.map((d) => {
    if (!isObject(d)) {
      return d;
    }
    return d.__ORIGIN_DATA;
  });
}
