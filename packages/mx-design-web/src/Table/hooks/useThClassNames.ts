import { useMemo } from 'react';
import { cs } from '@mx-design/web-utils';
// type
import type { InternalColumnProps } from '../interface';

interface getClassNamesProps {
  prefixCls: string;
  ellipsis: InternalColumnProps['ellipsis'];
  className: InternalColumnProps['className'];
  titleClassName: InternalColumnProps['titleClassName'];
}

export function useThClassNames(props: getClassNamesProps) {
  const { ellipsis, className, prefixCls, titleClassName } = props;

  return useMemo(
    () => ({
      cellChildrenCls: cs(`${prefixCls}-th-item`, {
        [`${prefixCls}-cell-text-ellipsis`]: ellipsis,
        // [`${prefixCls}-col-has-filter`]: shouldRenderFilters,
      }),
      thCls: cs(`${prefixCls}-th`, className),
      titleCls: cs(`${prefixCls}-th-item-title`, titleClassName),
    }),
    [prefixCls, ellipsis, className, titleClassName]
  );
}
