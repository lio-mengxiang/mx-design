import React from 'react';
import { isFunction } from '@mx-design/web-utils';
import { renderExpandIcon } from '../../utils';

export function ExpandNode({
  expandedRowRender,
  getPrefixColClassName,
  shouldRenderExpandRow,
  ComponentTd,
  record,
  rowK,
  expandProps,
  expandedRowKeys,
  onClickExpandBtn,
}) {
  if (!isFunction(expandedRowRender)) return null;

  return (
    <ComponentTd className={getPrefixColClassName('expand-icon-cell')}>
      {shouldRenderExpandRow && renderExpandIcon({ record, rowK, expandProps, expandedRowKeys, onClickExpandBtn })}
    </ComponentTd>
  );
}
