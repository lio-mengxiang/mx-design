import React, { useContext, forwardRef, useState, useImperativeHandle } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { ConfigContext } from '../../ConfigProvider';
import { getPageData, getProcessedData, getScrollStyle, renderTbody, renderThead } from '../utils';
import { Spin } from '../../Spin';
import ColGroup from './colgroup';
import { useTable } from '../store';
import { useResize, useTableClassName, useScroll, useFilterAndSorter, usePagination, useRowSelection, useExpand } from '../hooks';
import { pickDataAttributes } from '../../utils';
import { BR, CHILDREN, FILTER, PAGINATE, PLACE_HOLDER, ROW_KEY, SORTER } from '../constants';
import { useUpdate } from '../hooks/useUpdate';
// type
import type { TableProps, updateOnChangeType } from '../interface';
import { useStyles } from '../../hooks';

export interface TableInstance {
  getRootDomElement: () => HTMLDivElement;
}

const defaultProps: Partial<TableProps> = {
  showHeader: true,
  border: { wrapper: true },
  hover: true,
  rowKey: ROW_KEY,
  pagePosition: BR,
  childrenColumnName: CHILDREN,
  placeholder: PLACE_HOLDER,
  columns: [],
  indentSize: 16,
  data: [],
  leftFixedColumnsLength: 0,
  rightFixedColumnsLength: 0,
  expandProps: {},
};

function TableEl<T extends unknown>(baseProps: TableProps<T>, ref: React.Ref<TableInstance>) {
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
    pagination,
    stripe,
    hover,
    loadingProps,
    childrenColumnName,
    rowSelection,
    noDataElement,
    rowKey,
    onHeaderRow,
    placeholder,
    leftFixedColumnsLength,
    rightFixedColumnsLength,
    expandProps,
    expandedRowRender,
    pagePosition,
    onChange,
    renderPagination,
    loading,
    onRow,
    rowClassName,
    indentSize,
    themeStyle,
  } = props;

  // style
  const { wrapperStyle } = useStyles<TableProps<T>>({ style, themeStyle });

  // state
  const {
    clonedData,
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
    selectedRowKeys,
    setSelectedRowKeys,
    indeterminateKeys,
    setIndeterminateKeys,
    clonedDataKeysMap,
    flattenData,
    shouldRenderTreeDataExpandRow,
  } = useTable<T>({
    data,
    childrenColumnName,
    getPrefixCls,
    components,
    rowSelection,
    scroll,
    leftFixedColumnsLength,
    rightFixedColumnsLength,
    originColumns,
    rowKey,
    expandProps,
    expandedRowRender,
  });

  useImperativeHandle(
    ref,
    () => ({
      getRootDomElement: () => refTable.current as HTMLDivElement,
    }),
    [refTable]
  );

  const [updateOnChange, setUpdateOnChange] = useState<updateOnChangeType<T>>({
    action: undefined,
  });

  useResize({ refTableHead, refTableFoot, refTableBody });
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

  const { innerFiltersValue, onHandleFilter, compareFn, activeSorters, onSort, isControlledSort, isControlledFilter } =
    useFilterAndSorter<T>({
      flattenColumns,
      setUpdateOnChange,
    });

  /**
   * @zh 获得经过 sorter 和 filters 筛选之后的 data
   * @en the data was processed by sorter and filters
   */
  const processedData = getProcessedData({
    clonedData,
    innerFiltersValue,
    flattenColumns,
    compareFn,
    activeSorters,
    childrenColumnName,
    isControlledSort,
    isControlledFilter,
  });

  const { showPagination, paginationProps, paginationEle } = usePagination<T>({
    pagination,
    processedData,
    pagePosition,
    refTableBody,
    rowSelection,
    selectedRowKeys,
    setSelectedRowKeys,
    setIndeterminateKeys,
    setUpdateOnChange,
    renderPagination,
    prefixCls,
  });

  /**
   * @zh 分页后的data
   * @en data after paging
   */
  const pageData = getPageData<T>({ processedData, paginationProps, pagination, data: clonedData });

  useUpdate(() => {
    if (updateOnChange.action === FILTER) {
      onChange?.(paginationProps, activeSorters, updateOnChange.innerFiltersValue, {
        currentData: pageData,
        currentAllData: processedData,
        action: FILTER,
      });
      return;
    }
    if (updateOnChange.action === SORTER) {
      onChange?.(paginationProps, updateOnChange.sorter, innerFiltersValue, {
        currentData: pageData,
        currentAllData: processedData,
        action: SORTER,
      });
    }
    if (updateOnChange.action === PAGINATE) {
      onChange?.(updateOnChange.newPaginationProps, activeSorters, innerFiltersValue, {
        currentData: pageData,
        currentAllData: processedData,
        action: PAGINATE,
      });
    }
  }, [updateOnChange]);

  const { selectedRowSetKeys, indeterminateSetKeys, onCheckAll, onCheck, onCheckRadio, allSelectedRowSetKeys } = useRowSelection<T>({
    rowSelection,
    childrenColumnName,
    pageData,
    clonedDataKeysMap,
    selectedRowKeys,
    setSelectedRowKeys,
    indeterminateKeys,
    setIndeterminateKeys,
  });

  // expand
  const [expandedRowKeys, onClickExpandBtn] = useExpand<T>(props, flattenData, clonedDataKeysMap);

  // classnames
  const { wrapperCls } = useTableClassName({ border, prefixCls, stripe, hover, isRadio, scroll, className, columns });

  function renderTable() {
    const scrollStyle = getScrollStyle(scroll);

    const body = (
      <>
        {showHeader
          ? renderThead<T>({
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
              data: pageData,
              rowSelection,
              isRadio,
              isCheckbox,
              isCheckAll,
              expandProps,
              expandedRowRender,
              innerFiltersValue,
              onHandleFilter,
              activeSorters,
              onSort,
              isControlledSort,
              onCheckAll,
              selectedRowSetKeys,
              allSelectedRowSetKeys,
            })
          : null}
        {renderTbody<T>({
          components,
          flattenColumns,
          processedData: pageData,
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
          expandedRowKeys,
          onClickExpandBtn,
          isRadio,
          isCheckbox,
          rowSelection,
          fixedHeader,
          ComponentBodyWrapper,
          ComponentTable,
          refTableBody,
          scroll,
          selectedRowSetKeys,
          indeterminateSetKeys,
          onCheck,
          onCheckRadio,
          onRow,
          rowClassName,
          shouldRenderTreeDataExpandRow,
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
    <div ref={refTable} style={wrapperStyle} className={wrapperCls} {...pickDataAttributes(props)}>
      {columns.length === 0 ? null : (
        <Spin loading={loading} {...loadingProps}>
          {renderTable()}
          {showPagination && paginationEle}
        </Spin>
      )}
    </div>
  );
}

export const TableComponent = forwardRef<TableInstance, TableProps>(TableEl) as <T>(
  props: TableProps<T> & {
    ref?: React.Ref<TableInstance>;
  }
) => React.ReactElement;
