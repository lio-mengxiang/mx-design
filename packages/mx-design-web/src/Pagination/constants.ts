import { EN_US, ZH_CN } from '../Locale/constants';

export const DEFAULT_TYPE = 'default';
export const DEFAULT_CURRENT = 1;
export const DEFAULT_PAGE_SIZE = 10;
export const PREV = 'prev';
export const NEXT = 'next';
export const MORE = 'more';

export const PAGINATION_NAMESPACE = 'Pagination';

export const PAGINATION_LOCAL = {
  [EN_US]: {
    goto: 'Goto',
    page: 'Page',
    countPerPage: ' / Page',
    total: 'Total: {0}',
    prev: 'Go to previous page',
    next: 'Go to next page',
    currentPage: 'page {0}',
    prevSomePages: 'Previous {0} pages',
    nextSomePages: 'Next {0} pages',
    pageSize: 'page size',
  },
  [ZH_CN]: {
    goto: '前往',
    page: '页',
    countPerPage: '条/页',
    total: '共 {0} 条',
    prev: '上一页',
    next: '下一页',
    currentPage: '第 {0} 页',
    prevSomePages: '向前 {0} 页',
    nextSomePages: '向后 {0} 页',
    pageSize: '页码',
  },
};
