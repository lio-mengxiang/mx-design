import React from 'react';
import { isFunction } from '@mx-design/web-utils';

export function ExpandNode({
  expandedRowRender,
  prefixCls,
  expandColumnTitle,
  outerClassName,
  ...rest
}: {
  expandedRowRender: (record: any, index: number) => React.ReactNode;
  prefixCls: string;
  expandColumnTitle: React.ReactNode;
  outerClassName: string;
}) {
  if (!isFunction(expandedRowRender)) return null;
  return <th {...rest}>{expandColumnTitle && <div className={`${prefixCls}-th-item`}>{expandColumnTitle}</div>}</th>;
}
