import { cs } from '@mx-design/web-utils';
import { useMemo } from 'react';
import { PopupProps } from '../interface';
import { ConfigProviderProps } from '../../ConfigProvider';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  showArrow: PopupProps['showArrow'];
  overlayInnerClassName: PopupProps['overlayInnerClassName'];
  overlayClassName: PopupProps['overlayClassName'];
}

export function useClassNames(props: getClassNamesProps) {
  const { getPrefixCls, showArrow, overlayInnerClassName, overlayClassName } = props;
  const prefixCls = getPrefixCls('popup');

  return useMemo(
    () => ({
      popupRefCls: cs(`${prefixCls}`, overlayClassName),
      contentRefCls: cs(
        `${prefixCls}__content`,
        {
          [`${prefixCls}__content--arrow`]: showArrow,
        },
        overlayInnerClassName
      ),
      arrowCls: `${prefixCls}__arrow`,
    }),
    [overlayClassName, overlayInnerClassName, prefixCls, showArrow]
  );
}
