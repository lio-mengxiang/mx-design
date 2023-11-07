import { useMemo } from 'react';
import { cs } from '@mx-design/web-utils';
// type
import type { ColumnComponentProps } from '../interface';

interface getClassNamesProps {
  prefixCls: string;
  ellipsis: ColumnComponentProps['ellipsis'];
  isEnter: boolean;
  className: ColumnComponentProps['className'];
  nextSortDirection: any;
  enableSort: any;
}

export function useThClassNames(props: getClassNamesProps) {
  const { ellipsis, isEnter, className, prefixCls, nextSortDirection, enableSort } = props;

  return useMemo(
    () => ({
      cellChildrenCls: cs(`${prefixCls}-th-item`, {
        [`${prefixCls}-cell-text-ellipsis`]: ellipsis,
        [`${prefixCls}-cell-mouseenter`]: isEnter,
        [`${prefixCls}-cell-next-${nextSortDirection}`]: isEnter && nextSortDirection,
        [`${prefixCls}-col-has-sorter`]: enableSort,
        // [`${prefixCls}-col-has-filter`]: shouldRenderFilters,
      }),
      thCls: cs(`${prefixCls}-th`, className),
      titleCls: `${prefixCls}-th-item-title`,
    }),
    [prefixCls, ellipsis, isEnter, nextSortDirection, enableSort, className]
  );
}
