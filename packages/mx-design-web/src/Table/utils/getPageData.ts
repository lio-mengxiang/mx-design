import { isObject } from '@mx-design/web-utils';
// type
import type { PaginationProps } from '../../Pagination';
import type { INewRecord } from '../interface';

export function getPageData<T>({
  processedData,
  paginationProps,
  pagination,
  data,
}: {
  processedData: INewRecord<T>[];
  paginationProps: PaginationProps;
  pagination: boolean | PaginationProps;
  data: INewRecord<T>[];
}) {
  const { current, pageSize } = paginationProps;

  if (pagination === false) {
    return processedData;
  }
  if (isObject(pagination) && data.length <= pageSize) {
    return processedData;
  }
  return processedData.slice((current - 1) * pageSize, current * pageSize);
}
