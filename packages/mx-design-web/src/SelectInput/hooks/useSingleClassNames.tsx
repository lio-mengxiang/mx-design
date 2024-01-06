import { cs } from '@mx-design/web-utils';
import { useMemo } from 'react';
import { SelectInputProps } from '../interface';
import { ConfigProviderProps } from '../../ConfigProvider';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  className: SelectInputProps['className'];
  popupVisible: SelectInputProps['popupVisible'];
}

export function useSingleClassNames(props: getClassNamesProps) {
  const { getPrefixCls, className, popupVisible } = props;
  const prefixCls = getPrefixCls('select-input');

  return useMemo(
    () => ({
      inputCls: cs(className, {
          [`${prefixCls}-input--focused`]: popupVisible,
          [`${prefixCls}-is-focused`]: popupVisible,
        })
    }),
    [className, popupVisible, prefixCls]
  );
}
