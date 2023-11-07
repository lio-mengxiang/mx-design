import React from 'react';
import { Thead } from './thead';

export function TheadNode<T>({
  onHeaderRow,
  prefixCls,
  components,
  data,
  rowSelection,
  groupColumns,
  stickyOffsets,
  groupStickyClassNames,
  expandProps,
  isRadio,
  isCheckbox,
  isCheckAll,
  expandedRowRender,
}) {
  return (
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
    />
  );
}
