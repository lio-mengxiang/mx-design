import React from 'react';
import { isFunction } from '@mx-design/web-utils';
import { getSorterFn, getSorterPriority, sortCompare, getNextActiveSorters } from '../utils';
import { useMergeSorterOrder } from './useMergeSorterOrder';
import { SORTER } from '../constants';
// type
import type { InternalColumnProps, SortDirection, SorterInfo, updateOnChangeType } from '../interface';

const ignoreSorterOrder = [];
export function useSorter<T>({
  defaultSortersOrder,
  sortersOrder,
  setUpdateOnChange,
  isControlledSort,
}: {
  defaultSortersOrder: SorterInfo[];
  sortersOrder: SorterInfo[];
  setUpdateOnChange: React.Dispatch<React.SetStateAction<updateOnChangeType<T>>>;
  isControlledSort: boolean;
}) {
  const [activeSorters, setActiveSorters] = useMergeSorterOrder<SorterInfo[]>(ignoreSorterOrder, {
    value: sortersOrder,
    defaultValue: defaultSortersOrder,
    isControlledSort,
  });

  function onSort(direction: SortDirection, column: InternalColumnProps<T>) {
    if (!column) {
      return;
    }

    const sorter: SorterInfo = {
      direction,
      field: column.key,
      sorterFn: getSorterFn(column.sorter),
      priority: getSorterPriority(column.sorter),
    };

    const nextActiveSorters = getNextActiveSorters(sorter, activeSorters);
    setActiveSorters(nextActiveSorters);
    setUpdateOnChange({
      action: SORTER,
      sorter,
    });
  }

  function compareFn(activeSorters: SorterInfo[]) {
    const sorters = [...activeSorters];
    // priority sort
    sorters.sort((a, b) => b.priority - a.priority);
    return function (a, b) {
      for (let i = 0, l = sorters.length; i < l; i++) {
        const { sorterFn, direction, isBackSort } = sorters[i];
        if (!isFunction(sorterFn) || isBackSort) {
          continue;
        }
        const result = sortCompare(sorterFn, direction)(a, b);

        if (result !== 0) {
          return result;
        }
      }
      return 0;
    };
  }

  return {
    onSort,
    compareFn,
    activeSorters,
  };
}
