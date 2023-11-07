import React, { ReactNode } from 'react';
import { cs, isString, pick } from '@mx-design/web-utils';
import { useComponent, useGetCellChildren } from '../../hooks';
import { getOriginData, getPaddingLeft, getStyleTd } from '../../utils';
// type
import { ComponentsProps, InternalColumnProps, SorterInfo } from '../../interface';

type TdType = {
  prefixCls?: string;
  stickyClassName?: string;
  stickyOffset?: number;
  components?: ComponentsProps;
  InnerComponentTd?: any;
  column?: InternalColumnProps;
  currentSorter?: SorterInfo;
  placeholder?: ReactNode;
  indentSize?: number;
  record?: any;
  trIndex?: number;
  level?: number;
  recordHaveChildren?: boolean;
  ExpandBodyTreeIcon?: ReactNode | null;
  hasInlineExpandIcon?: boolean;
};

export function Td(props: TdType) {
  const {
    components,
    column,
    prefixCls,
    stickyClassName,
    stickyOffset,
    currentSorter,
    record,
    trIndex,
    level,
    placeholder,
    indentSize,
    recordHaveChildren,
    hasInlineExpandIcon,
    ExpandBodyTreeIcon,
  } = props;
  const { ComponentBodyCell, ComponentTd } = useComponent(components);

  // style
  const styleTd = getStyleTd({ column, stickyOffset });

  // classnames
  const classNameTd = cs(
    `${prefixCls}-td`,
    stickyClassName,
    // {
    //   [`${prefixCls}-col-sorted`]: currentSorter && currentSorter.direction && currentSorter.field === column.dataIndex,
    // },
    column.className
  );

  // handle event
  const { onHandleSave, ...cellEvent } = typeof column.onCell === 'function' ? column.onCell(record, trIndex) : { onHandleSave: () => {} };

  // content
  const cellChildren = useGetCellChildren({ column, record, trIndex, placeholder });

  // props
  const titleProps = column.ellipsis && isString(cellChildren) ? { title: cellChildren } : {};
  const cellProps = (isString(ComponentBodyCell) as unknown)
    ? { className: `${prefixCls}-cell-wrap-value` }
    : {
        className: `${prefixCls}-cell-wrap-value`,
        rowData: getOriginData(record),
        column,
        onHandleSave,
        ...cellEvent,
      };

  const tdProps = (isString(ComponentBodyCell) as unknown)
    ? {}
    : pick(cellProps, [
        'onClick',
        'onDoubleClick',
        'onContextMenu',
        'onMouseOver',
        'onMouseEnter',
        'onMouseLeave',
        'onMouseMove',
        'onMouseDown',
        'onMouseUp',
      ]);

  const content = (
    <>
      {ExpandBodyTreeIcon}
      <ComponentBodyCell {...cellProps}>{cellChildren}</ComponentBodyCell>
    </>
  );

  const paddingLeft = getPaddingLeft({ hasInlineExpandIcon, level, indentSize, recordHaveChildren });

  // rowSpan, colSpan
  const { rowSpan, colSpan } = record?.tdProps || {};
  if (rowSpan === 0 || colSpan === 0) {
    return null;
  }

  return (
    <ComponentTd className={classNameTd} key={column.key} style={styleTd} {...tdProps} {...record?.tdProps}>
      <div
        className={cs(`${prefixCls}-cell`, {
          [`${prefixCls}-cell-text-ellipsis`]: column.ellipsis,
        })}
        {...titleProps}
      >
        {paddingLeft ? <span className={`${prefixCls}-cell-indent`} style={{ paddingLeft }} /> : null}
        {content}
      </div>
    </ComponentTd>
  );
}
