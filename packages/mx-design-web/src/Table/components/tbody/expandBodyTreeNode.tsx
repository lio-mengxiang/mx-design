import React from 'react';
import { renderExpandIcon } from '../../utils';

export function ExpandBodyTreeNode({ hasInlineExpandIcon, prefixCls, record, rowK, expandProps, expandedRowKeys, onClickExpandBtn }) {
  if (!hasInlineExpandIcon) return null;

  return (
    <span className={`${prefixCls}-cell-expand-icon`}>
      {renderExpandIcon({ record, rowK, expandProps, expandedRowKeys, onClickExpandBtn })}
    </span>
  );
}
