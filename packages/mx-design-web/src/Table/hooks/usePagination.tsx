import React, { Key, MutableRefObject, ReactNode } from 'react';
import { useMergeValue } from '@mx-design/hooks';
import { cs, isObject } from '@mx-design/web-utils';
import { getPaginationProps, scrollToTop } from '../utils';
import { BL, BOTTOM_CENTER, DEFAULT_CURRENT_PAGE, DEFAULT_PAGE, PAGINATE, TL } from '../constants';
import { Pagination } from '../../Pagination';
import type { INewRecord, TableProps, updateOnChangeType } from '../interface';

export function usePagination<T>({
  pagination,
  processedData,
  pagePosition,
  refTableBody,
  rowSelection,
  setUpdateOnChange,
  setSelectedRowKeys,
  setIndeterminateKeys,
  selectedRowKeys,
  renderPagination,
  prefixCls,
}: {
  pagination: TableProps['pagination'];
  processedData: INewRecord<T>[];
  pagePosition: TableProps['pagePosition'];
  refTableBody: MutableRefObject<HTMLElement>;
  rowSelection: TableProps['rowSelection'];
  selectedRowKeys: Set<Key>;
  setSelectedRowKeys: React.Dispatch<React.SetStateAction<Set<Key>>>;
  setIndeterminateKeys: React.Dispatch<React.SetStateAction<Set<Key>>>;
  setUpdateOnChange: React.Dispatch<React.SetStateAction<updateOnChangeType<T>>>;
  renderPagination: TableProps['renderPagination'];
  prefixCls: string;
}) {
  const mergePagination = isObject(pagination) ? pagination : undefined;
  const [innerPageSize, setInnerPageSize] = useMergeValue<number>(DEFAULT_PAGE, {
    defaultValue: mergePagination?.defaultPageSize,
    value: mergePagination?.pageSize,
  });

  const [currentPage, setCurrentPage] = useMergeValue<number>(DEFAULT_CURRENT_PAGE, {
    defaultValue: mergePagination?.defaultCurrent,
    value: mergePagination?.current,
  });

  function onPaginationChange(current: number, pageSize: number) {
    setCurrentPage(current);
    setInnerPageSize(pageSize);
    if (current !== currentPage) {
      scrollToTop(refTableBody);
    }
    if (rowSelection && !rowSelection.checkCrossPage && selectedRowKeys.size) {
      setSelectedRowKeys(new Set());
      setIndeterminateKeys(new Set());
      rowSelection?.onChange([], []);
    }

    setUpdateOnChange({
      action: PAGINATE,
      newPaginationProps: {
        current,
        pageSize,
      },
    });

    mergePagination?.onChange?.(current, pageSize);
  }

  const paginationProps = getPaginationProps({
    processedData,
    pagination,
    innerPageSize,
    pagePosition,
    currentPage,
    setCurrentPage,
    onPaginationChange,
  });

  const showPagination = pagination !== false && (processedData.length !== 0 || paginationProps.total > 0);

  const paginationEle: ReactNode =
    typeof renderPagination === 'function' ? (
      renderPagination(<Pagination {...paginationProps} />)
    ) : (
      <div
        className={cs(`${prefixCls}-pagination`, {
          [`${prefixCls}-pagination-left`]: pagePosition === BL,
          [`${prefixCls}-pagination-center`]: pagePosition === BOTTOM_CENTER,
        })}
      >
        <Pagination {...paginationProps} />
      </div>
    );

  return { showPagination, paginationEle, paginationProps };
}
