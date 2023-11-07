import React from 'react';
import { Tbody } from './tbody';

export function TbodyNode<T>({
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
  childrenColumnName,
  expandProps,
  expandedRowRender,
  isRadio,
  isCheckbox,
  rowSelection,
}) {
  return (
    <Tbody<T>
      components={components}
      flattenColumns={flattenColumns}
      data={processedData}
      prefixCls={prefixCls}
      noDataElement={noDataElement || renderEmpty('Table')}
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
}
