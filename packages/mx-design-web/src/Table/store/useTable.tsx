import { Key, useMemo, useRef, useState } from 'react';
import { isObject } from '@mx-design/web-utils';
import { useMergeValue } from '@mx-design/hooks';
import { deepCloneColumns, deepCloneData, deleteUnExistKeys, getFixedColumns, isDataHaveChildren } from '../utils';
import { useColumns, useComponent, useStickyClassNames } from '../hooks';
import { ON_CHECK, ON_CHECK_ALL, ON_RADIO } from '../constants';
// type
import { TableProps } from '../interface';
import { ConfigProviderProps } from '../../ConfigProvider';

interface useTableProps<T> {
  data: TableProps<T>['data'];
  childrenColumnName: TableProps<T>['childrenColumnName'];
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  components: TableProps<T>['components'];
  rowSelection: TableProps<T>['rowSelection'];
  scroll: TableProps<T>['scroll'];
  leftFixedColumnsLength: TableProps<T>['leftFixedColumnsLength'];
  rightFixedColumnsLength: TableProps<T>['rightFixedColumnsLength'];
  originColumns: TableProps<T>['columns'];
  rowKey: TableProps<T>['rowKey'];
  expandProps: TableProps<T>['expandProps'];
  expandedRowRender: TableProps<T>['expandedRowRender'];
}

export function useTable<T>({
  data,
  childrenColumnName,
  getPrefixCls,
  components,
  rowSelection,
  scroll,
  leftFixedColumnsLength,
  rightFixedColumnsLength,
  originColumns,
  rowKey,
  expandProps,
  expandedRowRender,
}: useTableProps<T>) {
  // select
  const [selectedRowKeys, setSelectedRowKeys] = useMergeValue<Set<Key>>(new Set(), {
    defaultValue: rowSelection?.defaultSelectedRowKeys ? new Set(rowSelection?.defaultSelectedRowKeys) : undefined,
    value: rowSelection?.selectedRowKeys ? new Set(rowSelection?.selectedRowKeys) : undefined,
  });

  const [indeterminateKeys, setIndeterminateKeys] = useMergeValue<Set<Key>>(new Set(), {
    value: rowSelection?.indeterminateKeys ? new Set(rowSelection?.indeterminateKeys) : undefined,
  });

  // dom ref
  const refTableHead = useRef<HTMLElement | null>(null);
  const refTableBody = useRef<HTMLElement | null>(null);
  const refTableFoot = useRef<HTMLDivElement | null>(null);
  const refTable = useRef<HTMLDivElement | null>(null);
  const refTableNF = useRef<HTMLTableElement | null>(null);

  // data
  const [clonedData, flattenData, clonedDataKeysMap] = useMemo(() => {
    return deepCloneData<T>(data, childrenColumnName, rowKey, rowSelection);
  }, [data, childrenColumnName, rowKey, rowSelection]);

  const [clonedColumns] = useMemo(
    () => deepCloneColumns(!Array.isArray(originColumns) ? [] : originColumns.filter((c) => isObject(c)), 'children'),
    [originColumns]
  );

  const prefixCls = getPrefixCls('table');
  const shouldRenderTreeDataExpandRow = isDataHaveChildren({ data: clonedData, childrenColumnName }) && !expandedRowRender;

  // getColumns
  const { isRadio, isCheckbox, isCheckAll, groupColumns, flattenColumns, prefixIndex } = useColumns<T>({
    components,
    rowSelection,
    columns: clonedColumns,
    expandProps,
    expandedRowRender,
  });

  const {
    hasFixedColumn,
    hasFixedColumnRight,
    hasFixedColumnLeft,
    leftFixedLastRowIndex,
    rightFixedLastRowIndex,
    leftFixedFirstRowLength,
    rightFixedFirstRowLength,
  } = getFixedColumns(flattenColumns, groupColumns, leftFixedColumnsLength, rightFixedColumnsLength, prefixIndex);

  const [groupStickyClassNames, stickyClassNames, stickyOffsets] = useStickyClassNames(
    groupColumns,
    flattenColumns,
    prefixCls,
    leftFixedLastRowIndex,
    rightFixedLastRowIndex,
    leftFixedFirstRowLength,
    rightFixedFirstRowLength,
    prefixIndex,
    hasFixedColumn,
    hasFixedColumnRight,
    hasFixedColumnLeft
  );

  // components
  const { ComponentTable, ComponentHeaderWrapper, ComponentBodyWrapper } = useComponent(components);

  // isFixedHeader
  const fixedHeader = !!scroll?.y;

  return {
    clonedData,
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
    selectedRowKeys,
    setSelectedRowKeys,
    indeterminateKeys,
    setIndeterminateKeys,
    clonedDataKeysMap,
    flattenData,
    shouldRenderTreeDataExpandRow,
  };
}
