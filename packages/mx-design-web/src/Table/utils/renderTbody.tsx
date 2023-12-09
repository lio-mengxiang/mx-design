import React from 'react';
import { Tbody } from '../components/tbody';
import ColGroup from '../components/colgroup';
import { getScrollStyle, getTbodyScrollStyle } from './getScrollStyle';
import type { TbodyProps } from '../interface';

export function renderTbody<T>({
  components,
  flattenColumns,
  processedData,
  prefixCls,
  noDataElement,
  placeholder,
  hasFixedColumn,
  tableViewWidth,
  stickyOffsets,
  stickyClassNames,
  childrenColumnName = 'children',
  expandProps = {},
  expandedRowRender,
  expandedRowKeys,
  onClickExpandBtn,
  isRadio,
  isCheckbox,
  rowSelection,
  fixedHeader,
  ComponentBodyWrapper,
  ComponentTable,
  refTableBody,
  scroll,
  selectedRowSetKeys,
  indeterminateSetKeys,
  onCheck,
  onCheckRadio,
  onRow,
  rowClassName,
  shouldRenderTreeDataExpandRow,
  indentSize,
}: TbodyProps<T>) {
  const tbody = (
    <Tbody<T>
      components={components}
      flattenColumns={flattenColumns}
      processedData={processedData}
      prefixCls={prefixCls}
      noDataElement={noDataElement}
      placeholder={placeholder}
      hasFixedColumn={hasFixedColumn}
      tableViewWidth={tableViewWidth}
      stickyOffsets={stickyOffsets}
      stickyClassNames={stickyClassNames}
      childrenColumnName={childrenColumnName}
      expandProps={expandProps}
      expandedRowRender={expandedRowRender}
      isRadio={isRadio}
      isCheckbox={isCheckbox}
      rowSelection={rowSelection}
      selectedRowSetKeys={selectedRowSetKeys}
      indeterminateSetKeys={indeterminateSetKeys}
      onCheck={onCheck}
      onCheckRadio={onCheckRadio}
      expandedRowKeys={expandedRowKeys}
      onClickExpandBtn={onClickExpandBtn}
      onRow={onRow}
      rowClassName={rowClassName}
      shouldRenderTreeDataExpandRow={shouldRenderTreeDataExpandRow}
      indentSize={indentSize}
    />
  );
  const scrollStyleX = getScrollStyle(scroll);
  const scrollStyleY = getTbodyScrollStyle(scroll);

  return (
    <>
      {fixedHeader ? (
        <ComponentBodyWrapper ref={refTableBody} className={`${prefixCls}-body`} style={scrollStyleY}>
          <ComponentTable style={scrollStyleX}>
            <ColGroup flattenColumns={flattenColumns} prefixCls={prefixCls} />
            {tbody}
          </ComponentTable>
        </ComponentBodyWrapper>
      ) : (
        tbody
      )}
    </>
  );
}
