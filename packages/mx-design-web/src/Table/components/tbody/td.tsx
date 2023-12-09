import React, { ReactNode } from 'react';
import { cs, isString, pick } from '@mx-design/web-utils';
import { useComponent, useGetCellChildren } from '../../hooks';
import { getOriginData, getPaddingLeft, getStyleTd } from '../../utils';
// type
import { ComponentsProps, INewRecord, InternalColumnProps, SorterInfo } from '../../interface';

type TdType<T> = {
  prefixCls?: string;
  stickyClassName?: string;
  stickyOffset?: number;
  components?: ComponentsProps;
  InnerComponentTd?: any;
  column?: InternalColumnProps;
  currentSorter?: SorterInfo;
  placeholder?: ReactNode;
  indentSize?: number;
  record?: INewRecord<T>;
  trIndex?: number;
  level?: number;
  recordHaveChildren?: boolean;
  ExpandBodyTreeIcon?: ReactNode | null;
  hasInlineExpandIcon?: boolean;
};

export function Td<T>(props: TdType<T>) {
  const {
    components,
    column,
    prefixCls,
    stickyClassName,
    stickyOffset,
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

  // classnamestdProps
  const classNameTd = cs(`${prefixCls}-td`, stickyClassName, column.className);

  // handle event
  const { onHandleSave, ...cellEvent } = typeof column.onCell === 'function' ? column.onCell(record, trIndex) : { onHandleSave: () => {} };

  // content
  const { cellChildren, tdProps, rowSpan, colSpan } = useGetCellChildren<T>({ column, record, trIndex, placeholder });

  if (rowSpan === 0 || colSpan === 0) {
    return null;
  }

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

  const paddingLeft = getPaddingLeft({ hasInlineExpandIcon, level, indentSize, recordHaveChildren });
  const content = (
    <>
      {paddingLeft ? <span className={`${prefixCls}-cell-indent`} style={{ paddingLeft }} /> : null}
      {ExpandBodyTreeIcon}
      <ComponentBodyCell {...cellProps}>{cellChildren}</ComponentBodyCell>
    </>
  );

  return (
    <ComponentTd
      className={classNameTd}
      key={column.key}
      style={styleTd}
      {...pick(cellProps, [
        'onClick',
        'onDoubleClick',
        'onContextMenu',
        'onMouseOver',
        'onMouseEnter',
        'onMouseLeave',
        'onMouseMove',
        'onMouseDown',
        'onMouseUp',
      ])}
      {...tdProps}
    >
      <div
        className={cs(`${prefixCls}-cell`, {
          [`${prefixCls}-cell-text-ellipsis`]: column.ellipsis,
        })}
        {...titleProps}
      >
        {content}
      </div>
    </ComponentTd>
  );
}
