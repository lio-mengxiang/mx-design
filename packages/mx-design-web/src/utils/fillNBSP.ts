import { isString } from '@mx-design/web-utils';

// Replace empty string to &nbsp;
export function fillNBSP(str: any) {
  return isString(str) ? str.replace(/(\s{2,})|(\s{1,}$)/g, ($0) => '\u00A0'.repeat($0.length)) : str;
}
