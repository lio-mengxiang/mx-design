import React from 'react';
import ColGroup from '../components/colgroup';
import { getTheadScrollStyle } from './getScrollStyle';
import { Thead } from '../components/thead';
import type { TheadProps } from '../interface';

export function renderThead<T>({
  fixedHeader,
  prefixCls,
  ComponentHeaderWrapper,
  ComponentTable,
  flattenColumns,
  refTableHead,
  onHeaderRow,
  components,
  expandProps,
  groupColumns,
  scroll,
  data,
  rowSelection,
  groupStickyClassNames,
  stickyOffsets,
  isRadio,
  isCheckbox,
  isCheckAll,
  expandedRowRender,
  innerFiltersValue,
  onHandleFilter,
  activeSorters,
  onSort,
  isControlledSort,
  onCheckAll,
  selectedRowSetKeys,
  allSelectedRowSetKeys,
}: TheadProps<T>) {
  const scrollStyleX = getTheadScrollStyle(scroll);

  const TheadNode = (
    <Thead<T>
      onHeaderRow={onHeaderRow}
      prefixCls={prefixCls}
      components={components}
      groupColumns={groupColumns}
      data={data}
      rowSelection={rowSelection}
      stickyOffsets={stickyOffsets}
      groupStickyClassNames={groupStickyClassNames}
      isRadio={isRadio}
      isCheckbox={isCheckbox}
      isCheckAll={isCheckAll}
      expandProps={expandProps}
      expandedRowRender={expandedRowRender}
      innerFiltersValue={innerFiltersValue}
      onHandleFilter={onHandleFilter}
      activeSorters={activeSorters}
      onSort={onSort}
      isControlledSort={isControlledSort}
      onCheckAll={onCheckAll}
      selectedRowSetKeys={selectedRowSetKeys}
      allSelectedRowSetKeys={allSelectedRowSetKeys}
    />
  );

  return fixedHeader ? (
    <ComponentHeaderWrapper className={`${prefixCls}-header`}>
      <ComponentTable ref={refTableHead} style={scrollStyleX}>
        <ColGroup flattenColumns={flattenColumns} prefixCls={prefixCls} />
        {TheadNode}
      </ComponentTable>
    </ComponentHeaderWrapper>
  ) : (
    <>{TheadNode}</>
  );
}
