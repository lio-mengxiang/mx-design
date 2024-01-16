import type { FlexType } from '../interface';

export function getFlexString(flex: FlexType) {
  if (typeof flex === 'string' && /\d+[px|%|em|rem|]{1}/.test(flex)) {
    return `0 0 ${flex}`;
  }
  return flex;
}
