import React, { useEffect, useRef } from 'react';
import { useIsFirstRender, useStateWithPromise, debounceByRaf } from '@mx-design/hooks';
import { getContainer, getEleInViewport, scrollIntoView, setActiveLink } from './utils';

export function useStore({ propScrollContainer, onSelect, onChange, offset, lineless }) {
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
    /**
     * @zh 防止在点击link的时候出发滚动事件(会激活activeLink)，但是滚动函数会改变activeLink
     * @enPrevent the scroll event from being triggered when the link is clicked (activeLink will be activated), but the scroll function will change the activeLink
     */
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
  }, [isFirstRender, propScrollContainer]);

  useEffect(() => {
    const link = linkMap.current.get(currentLink);
    if (link && !lineless && sliderLineRef.current) {
      sliderLineRef.current.style.top = `${link.offsetTop}px`;
    }
  }, [currentLink, lineless]);

  return {
    onScroll,
    currentLink,
    addLink,
    removeLink,
    onLinkClick,
    wrapperRef,
    sliderLineRef,
    scrollContainer,
  };
}
