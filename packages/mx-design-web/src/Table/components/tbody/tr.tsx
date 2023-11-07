import React, { forwardRef } from 'react';
import { cs, isFunction, isString } from '@mx-design/web-utils';
import { Td } from './td';
import { useComponent } from '../../hooks';
import { getOriginData, isChildrenNotEmpty, shouldRowExpand } from '../../utils';
// type
import { TbodyProps } from '../../interface';
import { OperationNode } from './operationNode';
import { SelectionNode } from './selectionNode';
import { ExpandNode } from './expandNode';
import { CHECKBOX, RADIO } from '../../constants';
import { ExpandBodyTreeNode } from './expandBodyTreeNode';

type TrType<T = any> = TbodyProps<T> & {
  record?: T;
  shouldRowExpand?: (record, index) => boolean;
  index?: number;
  type?: string;
  level?: number;
  rowK?: React.Key;
};

export const Tr = forwardRef(<T,>(props: TrType<T>, ref) => {
  const {
    components,
    flattenColumns,
    data,
    prefixCls,
    noDataElement,
    placeholder,
    hasFixedColumn,
    tableViewWidth,
    indentSize,
    stickyOffsets,
    stickyClassNames,
    childrenColumnName,
    expandProps,
    expandedRowRender,
    type,
    level,
    rowSelection,
    onClickExpandBtn,
    // not Tbody props
    rowClassName,
    onRow,
    record,
    index,
    rowK,
  } = props;

  const { ComponentBodyRow, ComponentTd, getBodyComponentOperations } = useComponent(components);

  // record
  const originRecord = getOriginData(record);

  // tbodyRow props
  const rowProps = onRow?.(originRecord, index) || {};

  // checkbox
  const checkboxProps = rowSelection && isFunction(rowSelection.checkboxProps) ? rowSelection.checkboxProps(originRecord) : {};

  // expand
  const shouldRenderExpandRow = shouldRowExpand({ expandProps, record, index, expandedRowRender });
  const recordHaveChildren = isChildrenNotEmpty({ expandProps, record, childrenColumnName });
  const shouldRenderTreeDataExpandRow = recordHaveChildren && !expandedRowRender;

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
    // {
    //   [`${prefixCls}-row-checked`]: checked,
    //   [`${prefixCls}-row-expanded`]: expanded,
    // },
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
    <ExpandNode
      expandedRowRender={expandedRowRender}
      getPrefixColClassName={getPrefixColClassName}
      shouldRenderExpandRow={shouldRenderExpandRow}
      ComponentTd={ComponentTd}
      record={record}
      rowK={rowK}
      expandProps={expandProps}
      onClickExpandBtn={onClickExpandBtn}
      expandedRowKeys={[]}
    />
  );
  const selectionNode = (
    <SelectionNode
      record={record}
      rowK={rowK}
      type={type}
      ComponentTd={ComponentTd}
      getPrefixColClassName={getPrefixColClassName}
      rowSelection={rowSelection}
      checked={false}
      originRecord={originRecord}
      checkboxProps={checkboxProps}
    />
  );

  const bodyOperations = getBodyComponentOperations({ selectionNode, expandNode });

  return (
    <ComponentBodyRow {...trProps} ref={ref}>
      {flattenColumns.map((col, colIndex) => {
        const stickyOffset: number = stickyOffsets[colIndex];
        const stickyClassName: string = stickyClassNames[colIndex];
        // if has expandedRowRender, shouldRenderTreeDataExpandRow will be false
        const hasInlineExpandIcon = shouldRenderTreeDataExpandRow && col.$$isFirstColumn;

        if (col.$$isOperation) {
          return (
            <OperationNode
              record={record}
              key={colIndex}
              operationClassName={operationClassName}
              column={col}
              bodyOperations={bodyOperations}
              stickyOffset={stickyOffset}
              stickyClassName={stickyClassName}
              getPrefixColClassName={getPrefixColClassName}
              type={type}
            />
          );
        }

        const ExpandBodyTreeIcon = (
          <ExpandBodyTreeNode
            prefixCls={prefixCls}
            hasInlineExpandIcon={hasInlineExpandIcon}
            record={record}
            rowK={rowK}
            expandProps={expandProps}
            expandedRowKeys={[]}
            onClickExpandBtn={onClickExpandBtn}
          />
        );

        return (
          <Td
            key={colIndex}
            prefixCls={prefixCls}
            components={components}
            placeholder={placeholder}
            indentSize={indentSize}
            stickyClassName={stickyClassName}
            stickyOffset={stickyOffset}
            column={col}
            record={record}
            trIndex={index}
            level={level}
            hasInlineExpandIcon={hasInlineExpandIcon}
            recordHaveChildren={recordHaveChildren}
            ExpandBodyTreeIcon={ExpandBodyTreeIcon}
          />
        );
      })}
    </ComponentBodyRow>
  );
});
