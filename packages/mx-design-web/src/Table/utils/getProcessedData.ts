import type { INewRecord, InternalColumnProps, SorterInfo, TableProps } from '../interface';
import { getFilterData } from './getFilterData';
import { getSortData } from './getSortData';

export function getProcessedData<T>({
  clonedData,
  innerFiltersValue,
  flattenColumns,
  compareFn,
  activeSorters,
  childrenColumnName,
  isControlledSort,
  isControlledFilter,
}: {
  clonedData: INewRecord<T>[];
  innerFiltersValue: Partial<Record<keyof T, string[]>>;
  flattenColumns: InternalColumnProps[];
  compareFn: (activeSorters: SorterInfo[]) => (a: any, b: any) => number;
  activeSorters: SorterInfo[];
  childrenColumnName: TableProps['childrenColumnName'];
  isControlledSort: boolean;
  isControlledFilter: boolean;
}): INewRecord<T>[] {
  if (!Array.isArray(clonedData)) return [];
  let _data = clonedData.slice();

  if (!isControlledFilter) {
    // use innerFiltersValue to filter data
    _data = getFilterData({ innerFiltersValue, flattenColumns, _data }) || _data;
  }

  if (activeSorters?.length > 0 && !isControlledSort) {
    return getSortData({ compareFn, activeSorters, childrenColumnName, _data });
  }

  return _data;
}
