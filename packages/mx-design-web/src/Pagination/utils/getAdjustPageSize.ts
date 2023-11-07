import { DEFAULT_PAGE_SIZE } from '../constants';

export function getAdjustPageSize(sizeOptions) {
  if (sizeOptions && sizeOptions.length) {
    return sizeOptions[0];
  }
  return DEFAULT_PAGE_SIZE;
}
