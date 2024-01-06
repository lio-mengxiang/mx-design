import { cs } from '@mx-design/web-utils';
import { useMemo } from 'react';
// type
import type { DrawerProps } from '../interface';

interface getClassNamesProps {
  prefixCls: string;
}

export function useCardClassNames(props: getClassNamesProps) {
  const { prefixCls } = props;

  return useMemo(
    () => ({
      contentCls: cs(`${prefixCls}-content`),
      headerCls: cs(`${prefixCls}-header`),
      titleCls: `${prefixCls}-title`,
      titleNameCls: `${prefixCls}-title-name`,
      scrollCls: `${prefixCls}-scroll`,
      iconCls: `${prefixCls}-title-icon`,
    }),
    [prefixCls]
  );
}
