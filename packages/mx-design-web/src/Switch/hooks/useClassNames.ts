import { useMemo } from 'react';
import { cs } from '@mx-design/web-utils';
import { ConfigProviderProps } from '../../ConfigProvider';
// type
import type { SwitchProps } from '../interface';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  loading: SwitchProps['disabled'];
  checked: SwitchProps['checked'];
  className: SwitchProps['className'];
}

export function useClassNames(props: getClassNamesProps) {
  const { className, checked, loading, getPrefixCls } = props;
  const prefixCls = getPrefixCls('switch');

  return useMemo(
    () => ({
      buttonCls: cs(
        prefixCls,
        `${prefixCls}-type-circle`,
        {
          [`${prefixCls}-checked`]: checked,
          [`${prefixCls}-loading`]: loading,
        },
        className
      ),
      dotCls: `${prefixCls}-dot`,
      textCls: `${prefixCls}-text`,
    }),
    [checked, className, loading, prefixCls]
  );
}
