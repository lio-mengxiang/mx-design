import { cs } from '@mx-design/web-utils';
import { useMemo } from 'react';
import { ConfigProviderProps } from '../../ConfigProvider';
import { PopupProps } from '../../Popup';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  overlayClassName: PopupProps['overlayClassName'];
}

export function useClassNames(props: getClassNamesProps) {
  const { getPrefixCls, overlayClassName } = props;
  const prefixCls = getPrefixCls('tooltip');

  return useMemo(
    () => ({
      toolTipCls: cs(`${prefixCls}`, overlayClassName),
    }),
    [overlayClassName, prefixCls]
  );
}
