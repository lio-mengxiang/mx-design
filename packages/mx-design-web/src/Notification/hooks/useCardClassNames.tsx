import { cs } from '@mx-design/web-utils';
import { useMemo } from 'react';
import { ConfigProviderProps } from '../../ConfigProvider';
import { NotificationProps } from '../interface';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  type: NotificationProps['type'];
  closable: NotificationProps['closable'];
  className: NotificationProps['className'];
}

export function useCardClassNames(props: getClassNamesProps) {
  const { getPrefixCls, type, closable, className } = props;
  const prefixCls = getPrefixCls('notification');

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
      rightClassName: `${prefixCls}-right`,
      titleClassName: `${prefixCls}-title`,
      contentClassName: `${prefixCls}-content`,
      btnWrapperClassName: `${prefixCls}-btn-wrapper`,
      closeBtnClassName: `${prefixCls}-close-btn`,
    }),
    [prefixCls, type, closable, className]
  );
}
