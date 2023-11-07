import React from 'react';
import { isObject } from '@mx-design/web-utils';
import ColGroup from '../components/colgroup';
import { TheadNode } from '../components/thead/theadNode';
import { getTheadScrollStyle } from './getScrollStyle';

export function renderThead({
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
}) {
  const scrollStyleX = getTheadScrollStyle(scroll);

  const maxContentWidth = isObject(scroll) && scroll.x === 'max-content';

  return fixedHeader ? (
    <ComponentHeaderWrapper className={`${prefixCls}-header`}>
      <ComponentTable ref={refTableHead} style={maxContentWidth ? {} : scrollStyleX}>
        <ColGroup flattenColumns={flattenColumns} prefixCls={prefixCls} />
        <TheadNode
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
      </ComponentTable>
    </ComponentHeaderWrapper>
  ) : (
    <TheadNode
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
