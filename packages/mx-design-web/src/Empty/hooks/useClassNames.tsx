import { cs } from '@mx-design/web-utils';
import { useMemo } from 'react';
import { EmptyProps } from '..';
import { ConfigProviderProps } from '../../ConfigProvider';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  className: EmptyProps['className'];
}

export function useClassNames(props: getClassNamesProps) {
  const { getPrefixCls, className } = props;
  const prefixCls = getPrefixCls('empty');
  const classNames = cs(prefixCls, className);
  return useMemo(
    () => ({
      containerCls: classNames,
      wrapperCls: `${prefixCls}-wrapper`,
      imageCls: `${prefixCls}-image`,
      descriptionCls: `${prefixCls}-description`,
    }),
    [classNames, prefixCls]
  );
}
