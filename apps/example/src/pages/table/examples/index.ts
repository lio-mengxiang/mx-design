import { basic } from './basic';
import { filter } from './filter';
import { backEndFilter } from './back-end-filter';
import { singleSort } from './single-sort';
import { backEndSingleSort } from './back-end-single-sort';
import { multiSort } from './multi-sort';
import { backEndMultiSort } from './back-end-multi-sort';
import { uncontrolledPagination } from './uncontrolledPagination';
import { expandRow } from './expand-row';
import { nestedTable } from './nested-table';
import { treeData } from './tree-data';
import { customCell } from './custom-cell';
import { fixedColumn } from './fixed-column';
import { fixedHeader } from './fixed-header';
import { groupColumns } from './group-columns';
import { cellMerge } from './cell-merge';

export const exampleList = {
  [basic.namespace]: basic,
  [filter.namespace]: filter,
  [backEndFilter.namespace]: backEndFilter,
  [singleSort.namespace]: singleSort,
  [multiSort.namespace]: multiSort,
  [backEndSingleSort.namespace]: backEndSingleSort,
  [backEndMultiSort.namespace]: backEndMultiSort,
  [uncontrolledPagination.namespace]: uncontrolledPagination,
  [expandRow.namespace]: expandRow,
  [nestedTable.namespace]: nestedTable,
  [treeData.namespace]: treeData,
  [customCell.namespace]: customCell,
  [fixedColumn.namespace]: fixedColumn,
  [fixedHeader.namespace]: fixedHeader,
  [groupColumns.namespace]: groupColumns,
  [cellMerge.namespace]: cellMerge,
};
