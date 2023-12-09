import React, { Key } from 'react';
import { isFunction } from '@mx-design/web-utils';
import { renderExpandIcon } from '../../utils';
import type { ExpandProps, INewRecord } from '../../interface';

export function ExpandNode<T>({
  expandedRowRender,
  getPrefixColClassName,
  shouldRenderExpandRow,
  ComponentTd,
  record,
  rowK,
  expandProps,
  expandedRowKeys,
  onClickExpandBtn,
  outerClassName,
  ...rest
}: {
  expandedRowRender: (record: T, index: number) => React.ReactNode;
  getPrefixColClassName: (name: any) => string;
  shouldRenderExpandRow: boolean;
  ComponentTd: any;
  record: INewRecord<T>;
  rowK: Key;
  expandProps: ExpandProps<T>;
  expandedRowKeys: (string | number)[];
  onClickExpandBtn: (key: Key) => void;
  outerClassName: string;
}) {
  if (!isFunction(expandedRowRender)) return null;

  return (
    <ComponentTd {...rest}>
      {shouldRenderExpandRow && renderExpandIcon({ record, rowK, expandProps, expandedRowKeys, onClickExpandBtn })}
    </ComponentTd>
  );
}
