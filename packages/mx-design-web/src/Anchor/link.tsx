import React, { forwardRef, useContext, useEffect, useRef } from 'react';
import { isString } from '@mx-design/web-utils';
import { useMergeRefs } from '@mx-design/hooks';
import AnchorContext from './context';
import { AnchorLinkProps } from './interface';
import { ConfigContext } from '../ConfigProvider';
import { isNotNullUndefined } from './utils';
import { useLinkClassNames } from './hooks';

function Link(baseProps: AnchorLinkProps, ref) {
  // context
  const { getPrefixCls } = useContext(ConfigContext);
  const anchorContext = useContext(AnchorContext);
  const { currentLink, addLink, removeLink, onLinkClick } = anchorContext;

  // props
  const { className, style, href, children, title, ...rest } = baseProps;

  // classnames
  const { linkCls, titleCls } = useLinkClassNames({ getPrefixCls, currentLink, href, className });

  // ref
  const linkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    addLink && addLink(href, linkRef.current);
    return () => {
      removeLink && removeLink(href);
    };
  }, [href]);

  return (
    <div className={linkCls} style={style} ref={useMergeRefs(ref, linkRef)} {...rest}>
      {isNotNullUndefined(title) && isNotNullUndefined(href) && (
        <a
          className={titleCls}
          title={isString(title) ? title : ''}
          href={href}
          data-href={href}
          onClick={(e) => {
            onLinkClick && onLinkClick(e, href);
          }}
        >
          {title}
        </a>
      )}
      {children}
    </div>
  );
}

const AnchorLinkComponent = forwardRef<HTMLDivElement, AnchorLinkProps>(Link);

AnchorLinkComponent.displayName = 'AnchorLink';

export default AnchorLinkComponent;
