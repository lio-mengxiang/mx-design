import { useMemo } from 'react';
import { cs } from '@mx-design/web-utils';
import { ConfigProviderProps } from '../../ConfigProvider';
import { CheckboxProps } from '../interface';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  disabled: CheckboxProps<any>['disabled'];
  error: CheckboxProps<any>['error'];
  className: CheckboxProps<any>['className'];
  indeterminate: CheckboxProps<any>['indeterminate'];
  checked: CheckboxProps<any>['checked'];
}

export function useClassNames(props: getClassNamesProps) {
  const { error, disabled, indeterminate, checked, className, getPrefixCls } = props;
  const prefixCls = getPrefixCls('checkbox');

  return useMemo(
    () => ({
      wrapperCls: cs(
        prefixCls,
        {
          [`${prefixCls}-disabled`]: !!disabled,
          [`${prefixCls}-indeterminate`]: !!indeterminate,
          [`${prefixCls}-checked`]: checked,
          error,
        },
        className
      ),
      maskCls: `${prefixCls}-mask`,
      maskIconCls: `${prefixCls}-mask-icon`,
      textCls: `${prefixCls}-text`,
    }),
    [error, disabled, indeterminate, checked, className]
  );
}
