import { DEFAULT_SORT_ORDER, FILTERED_VALUE, SORT_ORDER } from '../constants';
import { mergeFiltersValueFn } from './mergeFiltersValueFn';
import { mergeSorterOrderFn } from './mergeSorterOrderFn';
// type
import type { InternalColumnProps, SorterInfo } from '../interface';

export function getDefaultFiltersAndSorters<T>(flattenColumns: InternalColumnProps[]) {
  const defaultFiltersValue = {} as Partial<Record<keyof T, string[]>>;
  const filtersValue = {} as Partial<Record<keyof T, string[]>>;
  const result: {
    [SORT_ORDER]: SorterInfo[];
    [DEFAULT_SORT_ORDER]: SorterInfo[];
  } = {
    [SORT_ORDER]: [],
    [DEFAULT_SORT_ORDER]: [],
  };

  flattenColumns.forEach((column) => {
    const innerDataIndex = column.key;
    // merge controlled and uncontrolled filtersValue
    mergeFiltersValueFn(column, innerDataIndex, defaultFiltersValue, filtersValue);
    // merge controlled and uncontrolled sorterOrder
    mergeSorterOrderFn(column, innerDataIndex, result);
  });
  const isControlledSort = flattenColumns.some((column) => SORT_ORDER in column) as boolean;
  const isControlledFilter = flattenColumns.some((column) => FILTERED_VALUE in column) as boolean;

  return {
    defaultFiltersValue,
    filtersValue,
    defaultSortersOrder: result[DEFAULT_SORT_ORDER],
    sortersOrder: result[SORT_ORDER],
    isControlledSort,
    isControlledFilter,
  };
}
