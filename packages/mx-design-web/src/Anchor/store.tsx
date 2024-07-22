import React, { useCallback, useEffect, useRef } from 'react';
import { useEvent, useIsFirstRender, useStateWithPromise } from '@mx-design/hooks';
import { throttle } from '@mx-design/web-utils';
import { getContainer, getEleInViewport, scrollIntoView, setActiveLink } from './utils';
import type { AnchorProps } from './interface';

interface StoreProps {
  propScrollContainer: AnchorProps['scrollContainer'];
  onSelect: AnchorProps['onSelect'];
  onChange: AnchorProps['onChange'];
  offset: AnchorProps['offset'];
  lineless: AnchorProps['lineless'];
}

export function useStore({ propScrollContainer, onSelect, onChange, offset, lineless }: StoreProps) {
  // ref (get dom)
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sliderLineRef = useRef<HTMLDivElement>(null);
  const scrollContainer = useRef<HTMLElement | Window>(null);

  // state
  const linkMap = useRef<Map<string, HTMLElement>>(new Map());
  const isScrolling = useRef(false);
  const [currentLink, setCurrentLink] = useStateWithPromise('');

  // get real scrollContainer
  scrollContainer.current = getContainer(propScrollContainer);

  const isFirstRender = useIsFirstRender();

  function onLinkClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, hash: string) {
    e.preventDefault();
    setActiveLink({ hash, linkMap, wrapperRef, currentLink, setCurrentLink, onChange });
    scrollIntoView({ scrollContainer, hash, offset, isScrolling });
    onSelect?.(hash, currentLink);
  }

  const handleScroll = useEvent(() => {
    /**
     * @zh 防止在点击link的时候出发滚动事件(会激活activeLink)，但是滚动函数会改变activeLink
     * @enPrevent the scroll event from being triggered when the link is clicked (activeLink will be activated), but the scroll function will change the activeLink
     */
    if (isScrolling.current) return;
    const element = getEleInViewport({ linkMap, scrollContainer });
    element?.id && setActiveLink({ hash: `#${element.id}`, linkMap, wrapperRef, currentLink, setCurrentLink, onChange });
  });

  const onScroll = useEvent(
    throttle(
      () => {
        handleScroll();
        isScrolling.current = false;
      },
      30,
      { trailing: true }
    )
  );

  useEffect(() => {
    scrollContainer.current?.addEventListener('scroll', onScroll);
    return () => {
      scrollContainer.current?.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  useEffect(() => {
    if (isFirstRender) onScroll();
  }, [isFirstRender, onScroll]);

  useEffect(() => {
    const link = linkMap.current.get(currentLink);
    if (link && !lineless && sliderLineRef.current) {
      sliderLineRef.current.style.top = `${link.offsetTop}px`;
    }
  }, [currentLink, lineless]);

  return {
    onScroll,
    currentLink,
    onLinkClick,
    wrapperRef,
    sliderLineRef,
    scrollContainer,
    linkMap,
  };
}
