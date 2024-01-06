import { isFunction } from '@mx-design/web-utils';
import { getColumnByDataIndex } from './getColumnByDataIndex';
import { ColumnProps } from '../interface';
import { isValidFilterValue } from './isValidFilterValue';
import { FILTERED_VALUE } from '../constants';

export function getFilterData<T>({ innerFiltersValue, flattenColumns, _data }) {
  let result;
  // use innerFiltersValue to filter data
  Object.keys(innerFiltersValue).forEach((field) => {
    if (isValidFilterValue(innerFiltersValue[field])) {
      const column = getColumnByDataIndex(field, flattenColumns) as ColumnProps<T>;
      if (column[FILTERED_VALUE]) return;
      if (column && isFunction(column.onFilter)) {
        result = _data.filter((row) => {
          return (column.onFilter as Function)(innerFiltersValue[field], row);
        });
      }
    }
  });
  return result;
}
