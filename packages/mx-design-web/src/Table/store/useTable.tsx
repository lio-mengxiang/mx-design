import { useMemo, useRef } from 'react';
import { isObject } from '@mx-design/web-utils';
import { deepCloneData, getFixedColumns, getProcessedData } from '../utils';
import { useColumns, useComponent, useStickyClassNames } from '../hooks';

export function useTable({
  data,
  childrenColumnName,
  getPrefixCls,
  components,
  rowSelection,
  scroll,
  leftFixedColumnsLength,
  rightFixedColumnsLength,
  originColumns,
}) {
  // dom ref
  const refTableHead = useRef<HTMLElement | null>(null);
  const refTableBody = useRef<HTMLElement | null>(null);
  const refTableFoot = useRef<HTMLDivElement | null>(null);
  const refTable = useRef<HTMLDivElement | null>(null);
  const refTableNF = useRef<HTMLTableElement | null>(null);

  // data
  const clonedData = useMemo(() => deepCloneData(data, childrenColumnName), [data, childrenColumnName]);
  const clonedColumns = useMemo(
    () => deepCloneData(!Array.isArray(originColumns) ? [] : originColumns.filter((c) => isObject(c)), 'children'),
    [originColumns]
  );
  const prefixCls = getPrefixCls('table');

  // getColumns
  const { isRadio, isCheckbox, isCheckAll, groupColumns, flattenColumns, prefixIndex } = useColumns({
    components,
    rowSelection,
    columns: clonedColumns,
  });

  const {
    hasFixedColumn,
    hasFixedColumnRight,
    hasFixedColumnLeft,
    leftFixedFirstRowLength,
    rightFixedFirstRowLength,
    leftFixedLastRowIndex,
    rightFixedLastRowIndex,
  } = getFixedColumns(flattenColumns, groupColumns, leftFixedColumnsLength, rightFixedColumnsLength);

  const [groupStickyClassNames, stickyClassNames, stickyOffsets] = useStickyClassNames(
    groupColumns,
    flattenColumns,
    prefixCls,
    prefixIndex,
    leftFixedFirstRowLength,
    rightFixedFirstRowLength,
    leftFixedLastRowIndex,
    rightFixedLastRowIndex
  );

  // components
  const { ComponentTable, ComponentHeaderWrapper, ComponentBodyWrapper } = useComponent(components);

  // isFixedHeader
  const fixedHeader = !!(scroll && scroll.y);
  /**
   * @zh 获得经过 sorter 和 filters 筛选之后的 data
   * @en the data was processed by sorter and filters
   */
  const processedData = getProcessedData({ clonedData });

  return {
    processedData,
    fixedHeader,
    ComponentTable,
    ComponentHeaderWrapper,
    ComponentBodyWrapper,
    groupColumns,
    flattenColumns,
    prefixCls,
    refTableHead,
    refTable,
    refTableNF,
    refTableBody,
    refTableFoot,
    isRadio,
    isCheckbox,
    isCheckAll,
    groupStickyClassNames,
    stickyClassNames,
    stickyOffsets,
    hasFixedColumn,
    hasFixedColumnRight,
    hasFixedColumnLeft,
    columns: clonedColumns,
  };
}
