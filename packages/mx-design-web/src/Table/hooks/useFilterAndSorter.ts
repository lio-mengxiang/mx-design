import React from 'react';
import { getDefaultFiltersAndSorters } from '../utils/getDefaultFiltersAndSorters';
import { useSorter } from './useSorter';
import { useFilter } from './useFilter';
// type
import type { InternalColumnProps, updateOnChangeType } from '../interface';

export function useFilterAndSorter<T>({
  flattenColumns,
  setUpdateOnChange,
}: {
  flattenColumns: InternalColumnProps[];
  setUpdateOnChange: React.Dispatch<React.SetStateAction<updateOnChangeType<T>>>;
}) {
  const { defaultFiltersValue, filtersValue, defaultSortersOrder, sortersOrder, isControlledSort, isControlledFilter } =
    getDefaultFiltersAndSorters<T>(flattenColumns);

  const { onSort, compareFn, activeSorters } = useSorter<T>({ defaultSortersOrder, sortersOrder, setUpdateOnChange, isControlledSort });

  const { innerFiltersValue, onHandleFilter } = useFilter<T>({
    defaultFiltersValue,
    filtersValue,
    setUpdateOnChange,
    isControlledFilter,
  });

  return {
    compareFn,
    activeSorters,
    onSort,
    onHandleFilter,
    innerFiltersValue,
    isControlledSort,
    isControlledFilter,
  };
}
