import { cs } from '@mx-design/web-utils';
import { useMemo } from 'react';
// type
import type { InputTagProps, ObjectValueType } from '../interface';

interface getClassNamesProps {
  prefixCls: string;
  disabled: InputTagProps['disabled'];
  status: InputTagProps['status'];
  focused: boolean;
  readOnly: InputTagProps['readOnly'];
  hasSuffix: boolean;
  value: ObjectValueType[];
}

export function useClassNames(props: getClassNamesProps) {
  const { prefixCls, disabled, status, focused, readOnly, hasSuffix, value } = props;

  return useMemo(
    () => ({
      innerClassNames: cs(prefixCls, `${prefixCls}-size`, {
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-${status}`]: status,
        [`${prefixCls}-focus`]: focused,
        [`${prefixCls}-readonly`]: readOnly,
        [`${prefixCls}-has-suffix`]: hasSuffix,
        [`${prefixCls}-has-placeholder`]: !value.length,
      }),
    }),
    [disabled, focused, hasSuffix, prefixCls, readOnly, status, value.length]
  );
}
