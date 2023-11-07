import React from 'react';
import { cs } from '@mx-design/web-utils';

export function ExpandNode({ expandedRowRender, operationClassName, prefixCls, expandColumnTitle }) {
  if (typeof expandedRowRender !== 'function') return null;
  return (
    <th className={cs(operationClassName, `${prefixCls}-expand`)}>
      {expandColumnTitle && <div className={`${prefixCls}-th-item`}>{expandColumnTitle}</div>}
    </th>
  );
}
