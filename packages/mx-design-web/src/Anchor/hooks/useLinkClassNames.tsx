import { cs } from '@mx-design/web-utils';
import { useMemo } from 'react';
import { ConfigProviderProps } from '../../ConfigProvider';
import { AnchorLinkProps, AnchorProps } from '../interface';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  href: AnchorLinkProps['href'];
  currentLink: string;
  className: AnchorProps['className'];
}

export function useLinkClassNames(props: getClassNamesProps) {
  const { getPrefixCls, currentLink, href, className } = props;

  const prefixCls = getPrefixCls('anchor-link');

  return useMemo(
    () => ({
      linkCls: cs(
        prefixCls,
        {
          [`${prefixCls}-active`]: currentLink === href,
        },
        className
      ),
      titleCls: `${prefixCls}-title`,
    }),
    [prefixCls, currentLink, href, className]
  );
}
