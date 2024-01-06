import React from 'react';
import { cs } from '@mx-design/web-utils';
// type
import type { InternalColumnProps, TableProps } from '../interface';

export function getNoDataTr({
  prefixCls,
  flattenColumns,
  tableViewWidth,
  noDataElement,
}: {
  prefixCls: string;
  flattenColumns: InternalColumnProps[];
  tableViewWidth: number;
  noDataElement: TableProps['noDataElement'];
}) {
  return (
    <tr className={cs(`${prefixCls}-tr`, `${prefixCls}-empty-row`)}>
      <td className={`${prefixCls}-td`} colSpan={flattenColumns.length}>
        <div
          className={cs(`${prefixCls}-no-data`, {
            [`${prefixCls}-expand-fixed-row`]: tableViewWidth,
          })}
          style={tableViewWidth ? { width: tableViewWidth } : undefined}
        >
          {noDataElement}
        </div>
      </td>
    </tr>
  );
}
