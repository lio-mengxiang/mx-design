import { cs } from '@mx-design/web-utils';
import { useMemo } from 'react';
// type
import type { InputProps } from '../interface';

interface getClassNamesProps {
  prefixCls: string;
  className: InputProps['className'];
  disabled: InputProps['disabled'];
  status: InputProps['status'];
  prefix: InputProps['prefix'];
  allowClear: InputProps['allowClear'];
  isCustomHeight: boolean;
  suffixElement: any;
  focus: boolean;
}

export function useInputClassNames(props: getClassNamesProps) {
  const { prefixCls, className, isCustomHeight, suffixElement, disabled, status, prefix, allowClear, focus } = props;

  return useMemo(
    () => ({
      wrapperCls: cs(
        `${prefixCls}-group-wrapper`,
        {
          [`${prefixCls}-custom-height`]: isCustomHeight,
          [`${prefixCls}-has-suffix`]: suffixElement,
          [`${prefixCls}-group-wrapper-disabled`]: disabled,
        },
        className
      ),
      innerWrapperCls: cs(`${prefixCls}-inner-wrapper`, {
        [`${prefixCls}-inner-wrapper-${status}`]: status,
        [`${prefixCls}-inner-wrapper-disabled`]: disabled,
        [`${prefixCls}-inner-wrapper-focus`]: focus,
        [`${prefixCls}-inner-wrapper-has-prefix`]: prefix,
        [`${prefixCls}-clear-wrapper`]: allowClear,
      }),
      groupCls: `${prefixCls}-group`,
      addBeforeCls: `${prefixCls}-group-addbefore`,
      groupPrefixCls: `${prefixCls}-group-prefix`,
      suffixCls: `${prefixCls}-group-suffix`,
      addAfterCls: `${prefixCls}-group-addafter`,
    }),
    [allowClear, className, disabled, focus, isCustomHeight, prefix, prefixCls, status, suffixElement]
  );
}
