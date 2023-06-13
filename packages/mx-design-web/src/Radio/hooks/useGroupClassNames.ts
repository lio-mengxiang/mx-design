import { useMemo } from 'react';
import { cs } from '@mx-design/web-utils';
import { ConfigProviderProps } from '../../ConfigProvider';
import { RadioGroupProps } from '../interface';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  direction: RadioGroupProps['direction'];
  type: RadioGroupProps['type'];
  className: RadioGroupProps['className'];
  mode: RadioGroupProps['mode'];
  disabled: RadioGroupProps['disabled'];
}

export function useGroupClassNames(props: getClassNamesProps) {
  const { direction, className, getPrefixCls, type, mode, disabled } = props;
  const prefixCls = getPrefixCls('radio');

  return useMemo(
    () => ({
      prefixCls,
      wrapperCls: cs(
        `${prefixCls}-group`,
        {
          [`${prefixCls}-group-type-button`]: type !== 'radio',
          [`${prefixCls}-mode-${mode}`]: !!mode,
          [`${prefixCls}-group-direction-vertical`]: direction === 'vertical',
        },
        className
      ),
    }),
    [type, direction, className, prefixCls, mode, disabled]
  );
}
