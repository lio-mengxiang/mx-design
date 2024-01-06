import { cs } from '@mx-design/web-utils';
import { useMemo } from 'react';
import { ConfigProviderProps } from '../../ConfigProvider';
import { ModalProps } from '../interface';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  className: ModalProps['className'];
  mask: ModalProps['mask'];
}

export function useModalClassNames(props: getClassNamesProps) {
  const { getPrefixCls, className, mask } = props;
  const prefixCls = getPrefixCls('modal');

  return useMemo(
    () => ({
      maskCls: cs(`${prefixCls}-mask`),
      wrapperCls: cs(`${prefixCls}-container`, { [`${prefixCls}-container-no-mask`]: !mask }, className),
    }),
    [className, prefixCls, mask]
  );
}
