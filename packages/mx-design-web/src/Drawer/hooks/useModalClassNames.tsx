import { cs } from '@mx-design/web-utils';
import { useMemo } from 'react';
import { ConfigProviderProps } from '../../ConfigProvider';
import { DrawerProps } from '../interface';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  className: DrawerProps['className'];
  mask: DrawerProps['mask'];
  placement: DrawerProps['placement'];
  isFixed: boolean;
}

export function useModalClassNames(props: getClassNamesProps) {
  const { getPrefixCls, className, mask, placement, isFixed } = props;
  const prefixCls = getPrefixCls('drawer');

  return useMemo(
    () => ({
      rootWrapperCls: cs(`${prefixCls}-root-wrapper`, {
        [`${prefixCls}-root-wrapper-fixed`]: isFixed,
        [`${prefixCls}-root-wrapper-absolute`]: !isFixed,
        [`${prefixCls}-root-wrapper-no-mask`]: !mask,
      }),
      maskCls: cs(`${prefixCls}-mask`),
      innerWrapperCls: cs(`${prefixCls}-inner-wrapper`),
      wrapperCls: cs(`${prefixCls}`, `${prefixCls}-${placement}`),
      containerCls: cs(className, `${prefixCls}-container`),
    }),
    [className, isFixed, mask, placement, prefixCls]
  );
}
