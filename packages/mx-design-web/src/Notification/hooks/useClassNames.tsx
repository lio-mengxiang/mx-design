import { cs } from '@mx-design/web-utils';
import { useMemo } from 'react';
import { ConfigProviderProps } from '../../ConfigProvider';
import { NotificationManagerProps } from '../interface';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  position: NotificationManagerProps['position'];
}

export function useClassNames(props: getClassNamesProps) {
  const { getPrefixCls, position } = props;
  const prefixCls = getPrefixCls('notification');

  return useMemo(
    () => ({
      wrapperClassNames: cs(`${prefixCls}-wrapper`, `${prefixCls}-wrapper-${position}`),
    }),
    [prefixCls, position]
  );
}
