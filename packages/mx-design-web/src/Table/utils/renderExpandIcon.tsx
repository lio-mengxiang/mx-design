import React from 'react';
import { isFunction } from '@mx-design/web-utils';
import { IconAdd, IconMinus } from '../../Icon';

export function renderExpandIcon({ record, rowK, expandProps, expandedRowKeys, onClickExpandBtn }) {
  const { icon: expandIcon } = expandProps;
  const expanded = !!~expandedRowKeys.indexOf(rowK);
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
      {expanded ? <IconMinus /> : <IconAdd />}
    </button>
  );
}
