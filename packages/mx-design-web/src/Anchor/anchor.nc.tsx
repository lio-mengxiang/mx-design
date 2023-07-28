import React, { forwardRef, useContext, useEffect, useImperativeHandle, useRef } from 'react';
import { useMergeProps, useIsFirstRender, useStateWithPromise, debounceByRaf } from '@mx-design/hooks';
import { Affix } from '../Affix';
import { ConfigContext } from '../ConfigProvider';
import AnchorContext from './context';
import { createNestedLink, getContainer, getEleInViewport, scrollIntoView, setActiveLink } from './utils';
import Link from './link';
import { useClassNames, useStyles } from './hooks';
// type
import { AnchorProps } from './interface';

type AnchorPropsWithChildren = React.PropsWithChildren<AnchorProps>;

const defaultProps: Partial<AnchorProps> = {
  offset: 5,
  affix: true,
  items: [],
};

function Anchor(baseProps: AnchorPropsWithChildren, ref) {
  // props
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<AnchorPropsWithChildren>(baseProps, defaultProps, componentConfig?.Anchor);
  const {
    className,
    style,
    themeStyle,
    scrollContainer: propScrollContainer,
    lineless,
    affix,
    affixStyle,
    offsetBottom,
    offsetTop,
    offset,
    children,
    onSelect,
    onChange,
    items,
    ...rest
  } = props;

  // classnames
  const { wrapperCls, lineSliderCls, listCls } = useClassNames({ getPrefixCls, lineless, className });
  // style
  const { wrapperStyle } = useStyles({ style, themeStyle });

  // ref (get dom)
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sliderLineRef = useRef<HTMLDivElement>(null);
  const scrollContainer = useRef<HTMLElement | Window>(null);

  // state
  const linkMap = useRef<Map<string, HTMLElement>>(new Map());
  const isScrolling = useRef(false);
  const [currentLink, setCurrentLink] = useStateWithPromise('');

  // get real scrollContainer
  const getAffixTarget = getContainer(propScrollContainer);
  scrollContainer.current = getAffixTarget;

  const isFirstRender = useIsFirstRender();
  function addLink(hash: string, element: HTMLElement) {
    if (hash) {
      linkMap.current.set(hash, element);
    }
  }

  function removeLink(hash: string) {
    linkMap.current.delete(hash);
  }

  function onLinkClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, hash: string) {
    e.preventDefault();
    setActiveLink({ hash, linkMap, wrapperRef, addLink, currentLink, setCurrentLink, onChange });
    scrollIntoView({ scrollContainer, hash, offset, isScrolling });
    onSelect?.(hash, currentLink);
  }

  const handleScroll = function () {
    if (isScrolling.current) return;
    const element = getEleInViewport({ linkMap, scrollContainer });
    element?.id && setActiveLink({ hash: `#${element.id}`, linkMap, wrapperRef, addLink, currentLink, setCurrentLink, onChange });
  };

  const onScroll = debounceByRaf(() => {
    handleScroll();
    isScrolling.current = false;
  });

  useEffect(() => {
    scrollContainer.current?.addEventListener('scroll', onScroll);
    return () => {
      scrollContainer.current?.removeEventListener('scroll', onScroll);
    };
  }, [propScrollContainer, onScroll]);

  useEffect(() => {
    onScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFirstRender, propScrollContainer]);

  useEffect(() => {
    const link = linkMap.current.get(currentLink);
    if (link && !lineless && sliderLineRef.current) {
      sliderLineRef.current.style.top = `${link.offsetTop}px`;
    }
  }, [currentLink, lineless]);

  useImperativeHandle(
    ref,
    () => ({
      onScroll,
    }),
    [onScroll]
  );

  const content = (
    <div className={wrapperCls} style={wrapperStyle} ref={wrapperRef} {...rest}>
      {!lineless && currentLink && <div className={lineSliderCls} ref={sliderLineRef} />}
      <AnchorContext.Provider
        value={{
          currentLink,
          addLink,
          removeLink,
          onLinkClick,
        }}
      >
        <div className={listCls}>{createNestedLink(items)}</div>
      </AnchorContext.Provider>
    </div>
  );

  return affix ? (
    <Affix offsetTop={offsetTop} offsetBottom={offsetBottom} style={affixStyle} container={() => getAffixTarget}>
      {content}
    </Affix>
  ) : (
    content
  );
}

const ForwardRefAnchor = forwardRef<unknown, AnchorPropsWithChildren>(Anchor);

const AnchorComponent = ForwardRefAnchor as typeof ForwardRefAnchor & {
  Link: typeof Link;
};

AnchorComponent.displayName = 'Anchor';

AnchorComponent.Link = Link;

export default AnchorComponent;
