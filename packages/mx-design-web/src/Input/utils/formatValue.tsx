import { isString, isUndefined } from '@mx-design/web-utils';

export function formatValue(value: any, maxLength: undefined | number) {
  let str: string;
  if (value !== null && !isUndefined(value) && !isString(value)) {
    str = String(value);
  } else {
    str = value || '';
  }
  if (maxLength) {
    return str.slice(0, maxLength);
  }
  return str;
}
