import { cs } from '@mx-design/web-utils';
import { useMemo } from 'react';
import { ConfigProviderProps } from '../../ConfigProvider';
import { MessageManagerProps } from '../interface';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  position: MessageManagerProps['position'];
}

export function useClassNames(props: getClassNamesProps) {
  const { getPrefixCls, position } = props;
  const prefixCls = getPrefixCls('message');

  return useMemo(
    () => ({
      wrapperClassNames: cs(`${prefixCls}-wrapper`, `${prefixCls}-wrapper-${position}`),
    }),
    [prefixCls, position]
  );
}
