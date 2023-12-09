import React from 'react';
import { cs, isFunction, isString } from '@mx-design/web-utils';
import { Td } from './td';
import { useComponent } from '../../hooks';
import { getOriginData, isChildrenNotEmpty, isDataHaveChildren, shouldRowExpand } from '../../utils';
import { OperationNode } from './operationNode';
import { SelectionNode } from './selectionNode';
import { ExpandNode } from './expandNode';
import { CHECKBOX, RADIO } from '../../constants';
import { ExpandBodyTreeNode } from './expandBodyTreeNode';
// type
import type { trPropsType } from './tbody';
import type { INewRecord } from '../../interface';

type TrType<T> = trPropsType<T> & {
  key: React.Key;
  rowK: React.Key;
  record: INewRecord<T>;
  index?: number;
  er: (r: any, i: any) => React.ReactNode;
};

export function Tr<T>(props: TrType<T>) {
  const {
    components,
    flattenColumns,
    prefixCls,
    placeholder,
    stickyOffsets,
    stickyClassNames,
    childrenColumnName,
    expandProps,
    expandedRowRender,
    type,
    level,
    rowSelection,
    onClickExpandBtn,
    selectedRowSetKeys,
    indeterminateSetKeys,
    onCheck,
    onCheckRadio,
    expandedRowKeys,
    shouldRenderTreeDataExpandRow,
    rowClassName,
    onRow,
    record,
    index,
    rowK,
    er,
    indentSize,
  } = props;

  const { ComponentBodyRow, ComponentTd, getBodyComponentOperations } = useComponent(components);

  // record
  const originRecord = getOriginData(record);

  // tbodyRow props
  const rowProps = onRow?.(originRecord, index) || {};
  // checkbox
  const checkboxProps = rowSelection && isFunction(rowSelection.checkboxProps) ? rowSelection.checkboxProps(originRecord) : {};
  const checked = selectedRowSetKeys.has(rowK);
  const indeterminate = indeterminateSetKeys.has(rowK);

  // expand
  const shouldRenderExpandRow = shouldRowExpand({ expandProps, record, index, er });
  const recordHaveChildren = isChildrenNotEmpty({ record, childrenColumnName });
  const expanded = expandedRowKeys.indexOf(rowK) > -1;

  // click expandIcon
  const rowClickProps =
    expandProps?.expandRowByClick && (shouldRenderExpandRow || shouldRenderTreeDataExpandRow)
      ? {
          onClick: (e) => {
            onClickExpandBtn?.(rowK);
            rowProps?.onClick?.(e);
          },
        }
      : {};

  // classnames
  const classNameTr = cs(
    `${prefixCls}-tr`,
    {
      [`${prefixCls}-row-checked`]: checked,
      [`${prefixCls}-row-expanded`]: expanded,
    },
    rowClassName?.(originRecord, index)
  );
  const operationClassName = cs(`${prefixCls}-td`, `${prefixCls}-operation`);
  const getPrefixColClassName = (name) => {
    return cs(operationClassName, `${prefixCls}-${name}`, {
      [`${prefixCls}-selection-col`]: type === CHECKBOX || type === RADIO,
      [`${prefixCls}-expand-icon-col`]: expandedRowRender,
    });
  };

  // props
  const baseTrProps = { className: classNameTr, key: rowK, ...rowProps, ...rowClickProps };
  const trProps = isString(ComponentBodyRow) ? baseTrProps : { ...baseTrProps, record, index };

  const expandNode = (
    <ExpandNode<T>
      expandedRowRender={expandedRowRender}
      getPrefixColClassName={getPrefixColClassName}
      shouldRenderExpandRow={shouldRenderExpandRow}
      ComponentTd={ComponentTd}
      record={record}
      rowK={rowK}
      expandProps={expandProps}
      onClickExpandBtn={onClickExpandBtn}
      expandedRowKeys={expandedRowKeys}
      outerClassName={getPrefixColClassName('expand-icon-cell')}
    />
  );
  const selectionNode = (
    <SelectionNode<T>
      record={record}
      rowK={rowK}
      type={type}
      ComponentTd={ComponentTd}
      rowSelection={rowSelection}
      originRecord={originRecord}
      checkboxProps={checkboxProps}
      checked={checked}
      indeterminate={indeterminate}
      onCheck={onCheck}
      onCheckRadio={onCheckRadio}
      outerClassName={getPrefixColClassName(type)}
    />
  );

  const bodyOperations = getBodyComponentOperations({ selectionNode, expandNode });

  return (
    <ComponentBodyRow {...trProps}>
      {flattenColumns.map((col, colIndex) => {
        const stickyOffset: number = stickyOffsets[colIndex];
        const stickyClassName: string = stickyClassNames[colIndex];
        // if has expandedRowRender, shouldRenderTreeDataExpandRow will be false
        const hasInlineExpandIcon = shouldRenderTreeDataExpandRow && col.$$isFirstColumn;

        if (col.$$isOperation) {
          return (
            <OperationNode<T>
              record={record}
              key={colIndex}
              operationClassName={operationClassName}
              column={col}
              bodyOperations={bodyOperations}
              stickyOffset={stickyOffset}
              stickyClassName={stickyClassName}
            />
          );
        }

        const ExpandBodyTreeIcon = (
          <ExpandBodyTreeNode<T>
            prefixCls={prefixCls}
            hasInlineExpandIcon={hasInlineExpandIcon}
            record={record}
            rowK={rowK}
            expandProps={expandProps}
            expandedRowKeys={expandedRowKeys}
            onClickExpandBtn={onClickExpandBtn}
            recordHaveChildren={recordHaveChildren}
          />
        );

        return (
          <Td
            key={colIndex}
            prefixCls={prefixCls}
            components={components}
            placeholder={placeholder}
            stickyClassName={stickyClassName}
            stickyOffset={stickyOffset}
            column={col}
            record={record}
            trIndex={index}
            level={level}
            hasInlineExpandIcon={hasInlineExpandIcon}
            recordHaveChildren={recordHaveChildren}
            ExpandBodyTreeIcon={ExpandBodyTreeIcon}
            indentSize={indentSize}
          />
        );
      })}
    </ComponentBodyRow>
  );
}
