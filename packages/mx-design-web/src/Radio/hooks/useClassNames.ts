import { useMemo } from 'react';
import { cs } from '@mx-design/web-utils';
import { ConfigProviderProps } from '../../ConfigProvider';
// type
import type { RadioGroupContextProps, RadioProps } from '../interface';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  disabled: RadioProps['disabled'];
  context: RadioGroupContextProps;
  className: RadioProps['className'];
  checked: RadioProps['checked'];
}

export function useClassNames(props: getClassNamesProps) {
  const { context, disabled, checked, className, getPrefixCls } = props;
  const prefixCls = getPrefixCls('radio');

  return useMemo(
    () => ({
      wrapperCls: cs(
        `${prefixCls}${context.type === 'button' ? '-button' : ''}`,
        {
          [`${prefixCls}-checked`]: checked,
          [`${prefixCls}-disabled`]: disabled,
        },
        className
      ),
      maskCls: `${prefixCls}-mask`,
      textCls: `${prefixCls}-text`,
      buttonInnerCls: `${prefixCls}-button-inner`,
    }),
    [disabled, checked, className, context]
  );
}
