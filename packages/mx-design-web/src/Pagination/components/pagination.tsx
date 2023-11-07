import React, { forwardRef } from 'react';
import { DefaultPagination } from './defaultPagination';
// types
import type { PaginationProps } from '../interface';

export const Pagination = forwardRef<HTMLDivElement | null, PaginationProps>(({ simple, ...rest }, ref) => {
  if (!simple) {
    return <DefaultPagination ref={ref} {...rest} />;
  }
  // return <SimplePagination ref={ref} className={cls} {...rest} />
  return null;
});
