import { isNumber, isString } from '@mx-design/web-utils';

export function px2Number(width: number | string): number | string {
  if (isNumber(width)) {
    return width;
  }
  if (isString(width) && width.includes('px')) {
    return +width.replace('px', '');
  }
  return width;
}
