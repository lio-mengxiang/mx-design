export function renderFilters({ innerFiltersValue, filterDropdown, column, setVisible, onHandleFilter }) {
  return filterDropdown?.({
    value: innerFiltersValue[column.key],
    setFilterValue: (value: any) => {
      onHandleFilter(column, value);
    },
    close() {
      setVisible(false);
    },
  });
}
