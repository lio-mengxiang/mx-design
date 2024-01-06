import { useMemo } from 'react';
import { cs } from '@mx-design/web-utils';
// type
import type { TableProps } from '../interface';

interface getClassNamesProps {
  prefixCls: string;
  border: TableProps['border'];
  className: TableProps['className'];
  stripe: TableProps['stripe'];
  hover: TableProps['hover'];
  columns: TableProps['columns'];
  scroll: TableProps['scroll'];
  isRadio: Boolean;
}

export function useTableClassName(props: getClassNamesProps) {
  const { border, prefixCls, stripe, hover, isRadio, scroll, className, columns } = props;

  const showWrapperBorder = border.wrapper;
  const showCellBorder = border.cell;
  const showHeaderCellBorder = border.cell || border.headerCell;
  const showBodyCellBorder = border.cell || border.bodyCell;

  return useMemo(
    () => ({
      wrapperCls: cs(
        prefixCls,
        {
          [`${prefixCls}-border`]: showWrapperBorder,
          [`${prefixCls}-border-cell`]: showCellBorder,
          [`${prefixCls}-border-header-cell`]: !showCellBorder && showHeaderCellBorder,
          [`${prefixCls}-border-body-cell`]: !showCellBorder && showBodyCellBorder,
          [`${prefixCls}-stripe`]: stripe,
          [`${prefixCls}-hover`]: hover,
          [`${prefixCls}-type-radio`]: isRadio,
          [`${prefixCls}-layout-fixed`]: (scroll && (scroll.x || scroll.y)) || columns.find((col) => col.ellipsis),
          // [`${prefixCls}-fixed-column`]: hasFixedColumn,
        },
        className
      ),
    }),
    [
      className,
      columns,
      hover,
      isRadio,
      prefixCls,
      scroll,
      showBodyCellBorder,
      showCellBorder,
      showHeaderCellBorder,
      showWrapperBorder,
      stripe,
    ]
  );
}
