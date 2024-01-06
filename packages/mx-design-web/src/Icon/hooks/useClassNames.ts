import { useMemo } from 'react';
import { cs } from '@mx-design/web-utils';
import { IconProps } from '..';
import { ConfigProviderProps } from '../../ConfigProvider';

interface getClassNamesProps {
  spin?: IconProps['spin'];
  getPrefixCls?: ConfigProviderProps['getPrefixCls'];
  className: string;
}

export function useClassNames(props: getClassNamesProps) {
  const { spin, getPrefixCls, className } = props;
  const prefixCls = getPrefixCls('icon');

  return useMemo(
    () => ({
      iconCls: cs(
        {
          [`${prefixCls}-spin`]: spin,
        },
        className,
        prefixCls
      ),
    }),
    [className, prefixCls, spin]
  );
}
