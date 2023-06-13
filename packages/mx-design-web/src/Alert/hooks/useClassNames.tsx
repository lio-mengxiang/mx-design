import { cs } from '@mx-design/web-utils';
import { useMemo } from 'react';
import { ConfigProviderProps } from '../../ConfigProvider';
import { AlertProps } from '../interface';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  type: AlertProps['type'];
  closable: AlertProps['closable'];
  className: AlertProps['className'];
}

export function useClassNames(props: getClassNamesProps) {
  const { getPrefixCls, type, closable, className } = props;
  const prefixCls = getPrefixCls('alert');

  return useMemo(
    () => ({
      iconClassNames: `${prefixCls}-icon`,
      itemClassNames: cs(
        prefixCls,
        `${prefixCls}-${type}`,
        {
          [`${prefixCls}-closable`]: closable,
        },
        className
      ),
      leftClassName: `${prefixCls}-left`,
      rightClassName: cs(`${prefixCls}-right`, {
        [`${prefixCls}-right_padding`]: closable,
      }),
      titleClassName: `${prefixCls}-title`,
      contentClassName: `${prefixCls}-content`,
      closeBtnClassName: `${prefixCls}-close-btn`,
    }),
    [prefixCls, type, closable, className]
  );
}
