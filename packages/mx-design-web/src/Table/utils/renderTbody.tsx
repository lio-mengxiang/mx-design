import React from 'react';
import { TbodyNode } from '../components/tbody';
import ColGroup from '../components/colgroup';
import { getScrollStyle, getTbodyScrollStyle } from './getScrollStyle';

export function renderTbody({
  rowKey,
  components,
  flattenColumns,
  processedData,
  prefixCls,
  noDataElement,
  renderEmpty,
  placeholder,
  hasFixedColumn,
  tableViewWidth,
  indentSize,
  stickyOffsets,
  stickyClassNames,
  childrenColumnName = 'children',
  expandProps = {},
  expandedRowRender,
  isRadio,
  isCheckbox,
  rowSelection,
  fixedHeader,
  ComponentBodyWrapper,
  ComponentTable,
  refTableBody,
  scroll,
}) {
  const tbody = (
    <TbodyNode
      components={components}
      flattenColumns={flattenColumns}
      processedData={processedData}
      prefixCls={prefixCls}
      noDataElement={noDataElement}
      renderEmpty={renderEmpty}
      rowKey={rowKey}
      placeholder={placeholder}
      hasFixedColumn={hasFixedColumn}
      tableViewWidth={tableViewWidth}
      indentSize={indentSize}
      stickyOffsets={stickyOffsets}
      stickyClassNames={stickyClassNames}
      childrenColumnName={childrenColumnName}
      expandProps={expandProps}
      expandedRowRender={expandedRowRender}
      isRadio={isRadio}
      isCheckbox={isCheckbox}
      rowSelection={rowSelection}
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
