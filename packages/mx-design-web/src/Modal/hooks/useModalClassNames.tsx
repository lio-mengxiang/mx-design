import { cs } from '@mx-design/web-utils';
import { useMemo } from 'react';
import { ConfigProviderProps } from '../../ConfigProvider';
import { ModalProps } from '../interface';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  maskStyle: ModalProps['maskStyle'];
  className: ModalProps['className'];
}

export function useModalClassNames(props: getClassNamesProps) {
  const { getPrefixCls, maskStyle, className } = props;
  const prefixCls = getPrefixCls('modal');

  return useMemo(
    () => ({
      maskCls: cs(`${prefixCls}-mask`, maskStyle),
      wrapperCls: cs(`${prefixCls}-container`, className),
    }),
    [className, maskStyle, prefixCls]
  );
}
