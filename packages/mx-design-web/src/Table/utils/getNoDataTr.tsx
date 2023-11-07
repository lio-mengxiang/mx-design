import React from 'react';
import { cs } from '@mx-design/web-utils';

export function getNoDataTr({ prefixCls, flattenColumns, tableViewWidth, noDataElement }) {
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
