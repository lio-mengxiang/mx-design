import { useMemo } from 'react';
import { cs } from '@mx-design/web-utils';
import { ConfigProviderProps } from '../../ConfigProvider';
// type
import type { TagProps } from '../interface';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  className: TagProps['className'];
  maxWidth: TagProps['maxWidth'];
  status: TagProps['status'];
  type: TagProps['type'];
}

export function useClassNames(props: getClassNamesProps) {
  const { type, status, maxWidth, className, getPrefixCls } = props;
  const prefixCls = getPrefixCls('tag');

  return useMemo(
    () => ({
      wrapperCls: cs(
        prefixCls,
        `${prefixCls}--${status}`,
        `${prefixCls}--${type}`,
        {
          [`${prefixCls}--ellipsis`]: !!maxWidth,
        },
        className
      ),
      textCls: `${prefixCls}--text`,
      iconCloseCls: `${prefixCls}__icon-close`,
    }),
    [prefixCls, status, type, maxWidth, className]
  );
}
