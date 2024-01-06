import React, { Key } from 'react';
import { isFunction } from '@mx-design/web-utils';
import { IconArrowRight, IconArrowBottom } from '../../Icon';
import type { ExpandProps, INewRecord } from '../interface';

export function renderExpandIcon<T>({
  record,
  rowK,
  expandProps,
  expandedRowKeys,
  onClickExpandBtn,
}: {
  record: INewRecord<T>;
  rowK: Key;
  expandProps: ExpandProps<T>;
  expandedRowKeys: (string | number)[];
  onClickExpandBtn: (key: React.Key) => void;
}) {
  const { icon: expandIcon } = expandProps;
  const expanded = expandedRowKeys.includes(rowK);

  const onClickProps = {
    onClick: (e) => {
      e.stopPropagation();
      onClickExpandBtn?.(rowK);
    },
  };
  return isFunction(expandIcon) ? (
    expandIcon({ expanded, record, ...onClickProps })
  ) : (
    <button {...onClickProps} type="button">
      {expanded ? <IconArrowBottom /> : <IconArrowRight />}
    </button>
  );
}
