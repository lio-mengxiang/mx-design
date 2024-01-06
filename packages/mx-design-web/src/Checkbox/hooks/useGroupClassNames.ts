import { useMemo } from 'react';
import { cs } from '@mx-design/web-utils';
import { ConfigProviderProps } from '../../ConfigProvider';
import { CheckboxGroupProps } from '../interface';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  direction: CheckboxGroupProps<any>['direction'];
  error: CheckboxGroupProps<any>['error'];
  className: CheckboxGroupProps<any>['className'];
}

export function useGroupClassNames(props: getClassNamesProps) {
  const { error, direction, className, getPrefixCls } = props;
  const prefixCls = getPrefixCls('checkbox');

  return useMemo(
    () => ({
      prefixCls,
      wrapperCls: cs(
        `${prefixCls}-group`,
        {
          [`${prefixCls}-group-is-error`]: error,
          [`${prefixCls}-group-direction-${direction}`]: direction,
        },
        className
      ),
    }),
    [error, direction, className, prefixCls]
  );
}
