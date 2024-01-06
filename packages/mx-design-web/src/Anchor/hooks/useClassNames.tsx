import { cs } from '@mx-design/web-utils';
import { useMemo } from 'react';
import { ConfigProviderProps } from '../../ConfigProvider';
import { AnchorProps } from '../interface';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  lineless: AnchorProps['lineless'];
  className: AnchorProps['className'];
}

export function useClassNames(props: getClassNamesProps) {
  const { getPrefixCls, lineless, className } = props;

  const prefixCls = getPrefixCls('anchor');

  return useMemo(
    () => ({
      wrapperCls: cs(prefixCls, className, {
        [`${prefixCls}-lineless`]: lineless,
      }),
      lineSliderCls: `${prefixCls}-line-slider`,
      listCls: `${prefixCls}-list`,
    }),
    [prefixCls, lineless, className]
  );
}
