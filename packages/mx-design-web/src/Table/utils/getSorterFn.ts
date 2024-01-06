import { isFunction } from '@mx-design/web-utils';
import type { ColumnProps, SorterFn } from '../interface';

export function getSorterFn(sorter: ColumnProps['sorter']): SorterFn | null {
  if (isFunction(sorter)) {
    return sorter;
  }
  if (typeof sorter === 'object' && isFunction(sorter.compare)) {
    return sorter.compare;
  }
  return null;
}
