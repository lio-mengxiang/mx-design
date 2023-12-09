import React from 'react';
import { isArray, isObject } from '@mx-design/web-utils';
import { setSelectPopupPosition } from './setSelectPopupPosition';
import type { PaginationProps } from '../../Pagination';
import type { INewRecord, TableProps } from '../interface';

export function getPaginationProps<T>({
  processedData,
  pagination,
  innerPageSize,
  pagePosition,
  currentPage,
  setCurrentPage,
  onPaginationChange,
}: {
  processedData: INewRecord<T>[];
  pagination: TableProps['pagination'];
  innerPageSize: number;
  pagePosition: TableProps['pagePosition'];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  onPaginationChange: PaginationProps['onChange'];
}) {
  const selectPopupPosition: 'top' | 'bottom' = setSelectPopupPosition(pagePosition);
  const total = isArray(processedData) ? processedData.length : 0;
  const maxPageNum = Math.ceil(total / innerPageSize);
  const current = maxPageNum < currentPage ? 1 : currentPage;

  if (current !== currentPage) {
    setCurrentPage(current);
  }

  // TODO: check select
  let paginationProps: PaginationProps = {
    total,
    pageSize: innerPageSize,
    current,
    selectProps: {
      triggerProps: {
        position: selectPopupPosition,
      },
    },
  };

  if (isObject(pagination)) {
    paginationProps = {
      ...paginationProps,
      ...pagination,
    };
  }
  paginationProps.onChange = onPaginationChange;

  return paginationProps;
}
