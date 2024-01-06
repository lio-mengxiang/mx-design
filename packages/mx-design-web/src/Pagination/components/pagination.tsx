import React, { forwardRef } from 'react';
import { DefaultPagination } from './defaultPagination';
import { SimplePagination } from './simplePagination';
// types
import type { PaginationProps } from '../interface';

export const Pagination = forwardRef<HTMLDivElement | null, PaginationProps>(({ simple, ...rest }, ref) => {
  if (!simple) {
    return <DefaultPagination ref={ref} {...rest} />;
  }
  return <SimplePagination ref={ref} {...rest} />;
});
