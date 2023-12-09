import React, { CSSProperties } from 'react';
import { cs } from '@mx-design/web-utils';
import Column from './column';
import { SelectionNode } from './selectionNode';
import { useComponent } from '../../hooks';
import { ExpandNode } from './expandNode';
import { setRowStickyOffset, getColumnFixedStyle } from '../../utils';
import { OperationNode } from './operationNode';
// type
import { TheadProps } from '../../interface';
import { CHECKBOX, RADIO } from '../../constants';

export function Thead<T>(props: TheadProps<T>) {
  const {
    activeSorters,
    onSort,
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
    innerFiltersValue,
    onHandleFilter,
    onCheckAll,
    selectedRowSetKeys,
    allSelectedRowSetKeys,
  } = props;
  const { ComponentThead, ComponentHeaderRow, getHeaderComponentOperations } = useComponent(components);

  // expand operation
  const { columnTitle: expandColumnTitle } = expandProps;

  const selectionRowSpanProps = groupColumns.length > 1 ? { rowSpan: groupColumns.length } : {};

  const operationClassName = cs(`${prefixCls}-th`, `${prefixCls}-operation`);

  const expandNode = (
    <ExpandNode
      expandedRowRender={expandedRowRender}
      prefixCls={prefixCls}
      expandColumnTitle={expandColumnTitle}
      outerClassName={cs(operationClassName, `${prefixCls}-expand`)}
    />
  );

  return (
    <ComponentThead>
      {groupColumns.map((row, index) => {
        const headerRowProps = onHeaderRow?.(row, index);
        const selectionNode = (isCheckbox || isRadio) && index === 0 && (
          <SelectionNode
            prefixCls={prefixCls}
            isRadio={isRadio}
            isCheckAll={isCheckAll}
            onCheckAll={onCheckAll}
            allSelectedRowSetKeys={allSelectedRowSetKeys}
            selectedRowSetKeys={selectedRowSetKeys}
            data={data}
            rowSelection={rowSelection}
            outerClassName={cs(operationClassName, `${prefixCls}-${isRadio ? RADIO : CHECKBOX}`)}
          />
        );

        const stickyClassNames = groupStickyClassNames[index];

        const headerOperations = getHeaderComponentOperations({ selectionNode, expandNode });

        return (
          <ComponentHeaderRow {...headerRowProps} key={index} className={`${prefixCls}-tr`}>
            {row.map((column, colIndex) => {
              const stickyOffset = setRowStickyOffset(column, stickyOffsets);
              const stickyClassName = stickyClassNames?.[colIndex];

              if (column.$$isOperation) {
                return (
                  <OperationNode<T>
                    key={column.key}
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
                  currentSorter={activeSorters.find((item) => item.field === column.key)}
                  onSort={onSort}
                  prefixCls={prefixCls}
                  components={components}
                  className={columnClassName}
                  columnFixedStyle={columnFixedStyle}
                  innerFiltersValue={innerFiltersValue}
                  onHandleFilter={onHandleFilter}
                />
              );
            })}
          </ComponentHeaderRow>
        );
      })}
    </ComponentThead>
  );
}
