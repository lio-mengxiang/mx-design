import React, { useContext, forwardRef } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { ConfigContext } from '../../ConfigProvider';
import { getScrollStyle, renderTbody, renderThead } from '../utils';
import { Spin } from '../../Spin';
import ColGroup from './colgroup';
import { useTable } from '../store';
import { useResize, useTableClassName, useScroll } from '../hooks';
import { pickDataAttributes } from '../../utils';
// type
import type { TableProps } from '../interface';

export interface TableInstance {
  getRootDomElement: () => HTMLDivElement;
}

const defaultProps: Partial<TableProps> = {
  showHeader: true,
  border: { wrapper: true },
  hover: true,
  rowKey: 'key',
  pagePosition: 'br',
  childrenColumnName: 'children',
  indentSize: 16,
  placeholder: '-',
  columns: [],
  data: [],
  leftFixedColumnsLength: 0,
  rightFixedColumnsLength: 0,
  expandProps: {},
};

function Table<T extends unknown>(baseProps: TableProps<T>, ref: React.Ref<TableInstance>) {
  const { getPrefixCls, componentConfig, renderEmpty } = useContext(ConfigContext);
  const props = useMergeProps<TableProps<T>>(baseProps, defaultProps, componentConfig?.Table);

  const {
    style,
    className,
    components,
    border,
    columns: originColumns,
    data,
    scroll,
    showHeader,
    stripe,
    hover,
    loadingProps,
    childrenColumnName,
    rowSelection,
    indentSize,
    noDataElement,
    rowKey,
    onHeaderRow,
    placeholder,
    leftFixedColumnsLength,
    rightFixedColumnsLength,
    expandProps,
    expandedRowRender,
  } = props;

  // state
  const {
    processedData,
    fixedHeader,
    ComponentTable,
    ComponentHeaderWrapper,
    ComponentBodyWrapper,
    groupColumns,
    flattenColumns,
    prefixCls,
    refTableHead,
    refTable,
    refTableNF,
    refTableBody,
    refTableFoot,
    isRadio,
    isCheckbox,
    isCheckAll,
    groupStickyClassNames,
    stickyClassNames,
    stickyOffsets,
    hasFixedColumn,
    hasFixedColumnRight,
    hasFixedColumnLeft,
    columns,
  } = useTable({
    data,
    childrenColumnName,
    getPrefixCls,
    components,
    rowSelection,
    scroll,
    leftFixedColumnsLength,
    rightFixedColumnsLength,
    originColumns,
  });

  useResize({ refTableHead, refTableFoot, refTableBody, fixedHeader });
  const { tableViewWidth, tableScrollHandlerNF } = useScroll({
    hasFixedColumn,
    scroll,
    prefixCls,
    refTable,
    hasFixedColumnLeft,
    hasFixedColumnRight,
    refTableBody,
    refTableHead,
    refTableFoot,
    fixedHeader,
    refTableNF,
    flattenColumns,
  });

  // classnames
  const { wrapperCls } = useTableClassName({ border, prefixCls, stripe, hover, isRadio, scroll, className, columns });

  function renderTable() {
    const scrollStyle = getScrollStyle(scroll);

    const body = (
      <>
        {showHeader
          ? renderThead({
              fixedHeader,
              prefixCls,
              ComponentHeaderWrapper,
              ComponentTable,
              flattenColumns,
              refTableHead,
              onHeaderRow,
              components,
              groupColumns,
              groupStickyClassNames,
              stickyOffsets,
              scroll,
              data,
              rowSelection,
              isRadio,
              isCheckbox,
              isCheckAll,
              expandProps,
              expandedRowRender,
            })
          : null}
        {renderTbody({
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
          fixedHeader,
          ComponentBodyWrapper,
          ComponentTable,
          refTableBody,
          scroll,
        })}
      </>
    );

    return (
      <>
        <div className={`${prefixCls}-container`}>
          <div className={`${prefixCls}-content-scroll`}>
            <div className={`${prefixCls}-content-inner`} onScroll={!fixedHeader ? tableScrollHandlerNF : undefined}>
              {fixedHeader ? (
                body
              ) : (
                <ComponentTable ref={refTableNF} style={scrollStyle}>
                  <ColGroup prefixCls={prefixCls} flattenColumns={flattenColumns} />
                  {body}
                </ComponentTable>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div ref={refTable} style={style} className={wrapperCls} {...pickDataAttributes(props)}>
      {columns.length === 0 ? null : <Spin {...loadingProps}>{renderTable()}</Spin>}
    </div>
  );
}

const TableComponent = forwardRef<TableInstance, TableProps>(Table) as <T>(
  props: TableProps<T> & {
    ref?: React.Ref<TableInstance>;
  }
) => React.ReactElement;

export { TableComponent as Table };
