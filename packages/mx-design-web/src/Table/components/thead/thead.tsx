import React, { CSSProperties } from 'react';
import { cs } from '@mx-design/web-utils';
import Column from './column';
import { SelectionNode } from './selectionNode';
import { useComponent } from '../../hooks';
import { ExpandNode } from './expandNode';
import { setRowStickyOffset, getColumnFixedStyle } from '../../utils';
import { OperationNode } from './operationNode';
// type
// import type { TheadProps } from '../interface';

export function Thead<T>(props: any) {
  const {
    onHeaderRow,
    expandProps,
    prefixCls,
    components,
    data,
    rowSelection,
    groupColumns,
    stickyOffsets,
    groupStickyClassNames,
    isRadio,
    isCheckbox,
    isCheckAll,
    expandedRowRender,
    sorter,
    sortDirections,
  } = props;
  const { ComponentThead, ComponentHeaderRow, getHeaderComponentOperations } = useComponent(components);

  // expand operation
  const { columnTitle: expandColumnTitle } = expandProps;

  const selectionRowSpanProps = groupColumns.length > 1 ? { rowSpan: groupColumns.length } : {};

  const operationClassName = cs(`${prefixCls}-th`, `${prefixCls}-operation`);

  const expandNode = (
    <ExpandNode
      expandedRowRender={expandedRowRender}
      operationClassName={operationClassName}
      prefixCls={prefixCls}
      expandColumnTitle={expandColumnTitle}
    />
  );

  return (
    <ComponentThead>
      {groupColumns.map((row, index) => {
        const headerRowProps = onHeaderRow?.(row, index);
        const selectionNode = (isCheckbox || isRadio) && index === 0 && (
          <SelectionNode
            operationClassName={operationClassName}
            prefixCls={prefixCls}
            isRadio={isRadio}
            isCheckAll={isCheckAll}
            // data={data}
            rowSelection={rowSelection}
          />
        );

        const stickyClassNames = groupStickyClassNames[index];

        const headerOperations = getHeaderComponentOperations({ selectionNode });

        return (
          <ComponentHeaderRow {...headerRowProps} key={index} className={`${prefixCls}-tr`}>
            {row.map((column, colIndex) => {
              const stickyOffset = setRowStickyOffset(column, stickyOffsets);
              const stickyClassName = stickyClassNames[colIndex];

              if (column.$$isOperation) {
                return (
                  <OperationNode
                    key={colIndex}
                    operationClassName={operationClassName}
                    column={column}
                    headerOperations={headerOperations}
                    selectionRowSpanProps={selectionRowSpanProps}
                    stickyOffset={stickyOffset}
                    stickyClassName={stickyClassName}
                    prefixCls={prefixCls}
                    isRadio={isRadio}
                  />
                );
              }

              const headerCellProps = column.onHeaderCell?.(column, colIndex);
              const columnClassName = cs(stickyClassName, column.className);
              const columnFixedStyle: CSSProperties = getColumnFixedStyle(column, stickyOffset);

              return (
                <Column<T>
                  key={column.key}
                  index={colIndex}
                  _key={column.key}
                  {...column}
                  column={column}
                  headerCellProps={headerCellProps}
                  prefixCls={prefixCls}
                  components={components}
                  className={columnClassName}
                  columnFixedStyle={columnFixedStyle}
                />
              );
            })}
          </ComponentHeaderRow>
        );
      })}
    </ComponentThead>
  );
}
