import { isUndefined } from '@mx-design/web-utils';

export function isValidFilterValue(value) {
  return !isUndefined(value) && value !== '';
}

export function isFilterActive(value) {
  return !isUndefined(value) && value !== '';
}
