export function mergeFiltersValueFn(column, innerDataIndex, defaultFiltersValue, filtersValue) {
  if (column.defaultFilters) {
    defaultFiltersValue[innerDataIndex] = column.defaultFilters;
  }
  if (column.filteredValue) {
    filtersValue[innerDataIndex] = column.filteredValue;
  }
}
