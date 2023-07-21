import { isObject } from './is';

export function mergeObject(obj, ...sources) {
  for (const source of sources) {
    for (const key in source) {
      if (source[key] === null || source[key] === undefined) continue;
      obj[key] = recursiveMerge(obj[key], source[key]);
    }
  }
  return obj;
}

function recursiveMerge(value, newValue) {
  if (Array.isArray(value) && Array.isArray(newValue)) {
    return newValue.map((val, i) => recursiveMerge(value[i], val));
  }
  if (isObject(value) && isObject(newValue)) {
    return mergeObject(value, newValue);
  }
  return newValue;
}
