import { useMemo } from 'react';
import { cs } from '@mx-design/web-utils';
import { ConfigProviderProps } from '../../ConfigProvider';
import { SpinProps } from '../interface';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  block: SpinProps['block'];
  loading: SpinProps['loading'];
  tip: SpinProps['tip'];
  children: SpinProps['children'];
  className: SpinProps['className'];
}

export function useClassNames(props: getClassNamesProps) {
  const { getPrefixCls, block, loading, tip, children, className } = props;
  const prefixCls = getPrefixCls('spin');

  return useMemo(
    () => ({
      prefixCls,
      wrapperCls: cs(
        prefixCls,
        {
          [`${prefixCls}-block`]: block,
          [`${prefixCls}-loading`]: loading,
          [`${prefixCls}-with-tip`]: tip && !children,
        },
        className
      ),
      childrenWrapperCls: `${prefixCls}-children`,
      loadingLayerCls: `${prefixCls}-loading-layer`,
      loadingLayerInnerCls: `${prefixCls}-loading-layer-inner`,
      tipCls: `${prefixCls}-tip`,
    }),
    [block, children, className, loading, prefixCls, tip]
  );
}
