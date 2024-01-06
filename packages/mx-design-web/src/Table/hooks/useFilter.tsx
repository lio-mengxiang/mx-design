import React from 'react';
import { FILTER } from '../constants';
import type { InternalColumnProps, updateOnChangeType } from '../interface';
import { useMergeFiltersValue } from './useMergeFiltersValue';

type FilterType<T> = Partial<Record<keyof T, string[]>>;
const ignoreFiltersValue = {};

export function useFilter<T>({
  setUpdateOnChange,
  defaultFiltersValue,
  filtersValue,
  isControlledFilter,
}: {
  setUpdateOnChange: React.Dispatch<React.SetStateAction<updateOnChangeType<T>>>;
  defaultFiltersValue: Partial<Record<keyof T, string[]>>;
  filtersValue: Partial<Record<keyof T, string[]>>;
  isControlledFilter: boolean;
}) {
  const [innerFiltersValue, setFiltersValue] = useMergeFiltersValue<FilterType<T>>(ignoreFiltersValue, {
    value: filtersValue,
    defaultValue: defaultFiltersValue,
    isControlledFilter,
  });

  function onHandleFilter(column: InternalColumnProps<T>, value: any) {
    const mergedFiltersValue = {
      ...innerFiltersValue,
      [column.key]: value,
    };

    setFiltersValue(mergedFiltersValue);
    setUpdateOnChange({
      action: FILTER,
      innerFiltersValue: mergedFiltersValue,
    });
  }

  return {
    onHandleFilter,
    innerFiltersValue,
  };
}
