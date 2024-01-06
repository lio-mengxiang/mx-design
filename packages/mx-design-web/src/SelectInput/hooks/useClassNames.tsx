import { cs } from '@mx-design/web-utils';
import { useMemo } from 'react';
import { SelectInputProps } from '../interface';
import { ConfigProviderProps } from '../../ConfigProvider';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  className: SelectInputProps['className'];
  popupVisible: SelectInputProps['popupVisible'];
  innerPopupVisible: boolean;
  value: SelectInputProps['value'];
  borderless: SelectInputProps['borderless'];
}

export function useClassNames(props: getClassNamesProps) {
  const { getPrefixCls, className, popupVisible, innerPopupVisible, value, borderless } = props;
  const prefixCls = getPrefixCls('select-input');

  return useMemo(
    () => ({
      popupClasses: cs(className, `${prefixCls}-select-input`, {
        [`${prefixCls}-select-input--borderless`]: borderless,
        // [`${prefixCls}-select-input--multiple`]: multiple,
        [`${prefixCls}-select-input--popup-visible`]: popupVisible ?? innerPopupVisible,
        [`${prefixCls}-select-input--empty`]: value instanceof Array ? !value.length : !value,
      }),
    }),
    [borderless, className, innerPopupVisible, popupVisible, prefixCls, value]
  );
}
