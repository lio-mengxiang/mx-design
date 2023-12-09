import React, { Key } from 'react';
import { renderExpandIcon } from '../../utils';
import { ExpandProps, INewRecord } from '../../interface';

export function ExpandBodyTreeNode<T>({
  hasInlineExpandIcon,
  prefixCls,
  record,
  rowK,
  expandProps,
  expandedRowKeys,
  onClickExpandBtn,
  recordHaveChildren,
}: {
  hasInlineExpandIcon: boolean;
  prefixCls: string;
  record: INewRecord<T>;
  rowK: Key;
  expandProps: ExpandProps<T>;
  expandedRowKeys: (string | number)[];
  onClickExpandBtn: (key: React.Key) => void;
  recordHaveChildren: boolean;
}) {
  if (!hasInlineExpandIcon || !recordHaveChildren) return null;

  return (
    <span className={`${prefixCls}-cell-expand-icon`}>
      {renderExpandIcon<T>({ record, rowK, expandProps, expandedRowKeys, onClickExpandBtn })}
    </span>
  );
}
