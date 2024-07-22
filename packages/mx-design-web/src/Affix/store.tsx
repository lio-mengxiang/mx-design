import { useEffect, useRef } from 'react';
import { debounceByRaf, isFunction, isWindow } from '@mx-design/web-utils';
import { useEvent } from '@mx-design/hooks';
import {
  getScrollContainer,
  calcTopAndBottom,
  getFixedTop,
  isNeedListParent,
  addScrollEvent,
  removeScrollEvent,
  handleFixedToggle,
} from './utils';
import { isHTMLElement } from '../Popper-js/utils/isHTMLElement';
// type
import type { ConfigProviderProps } from '../ConfigProvider/interface';
import type { AffixProps, ScrollContainerElement } from './interface';

interface useStoreProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  zIndex?: number;
  container: AffixProps['container'];
  offsetBottom: AffixProps['offsetBottom'];
  offsetTop: AffixProps['offsetTop'];
  onFixedChange: AffixProps['onFixedChange'];
  isInScrollContainer: AffixProps['isInScrollContainer'];
}

export function useStore(props: useStoreProps) {
  // data
  const { getPrefixCls, zIndex, container, offsetBottom, offsetTop, onFixedChange, isInScrollContainer } = props;
  // dom ref
  const affixRef = useRef<HTMLDivElement | null>(null);
  const affixWrapRef = useRef<HTMLDivElement | null>(null);
  const placeholderEL = useRef<HTMLElement | null>(null);
  const scrollContainer = useRef<ScrollContainerElement | null>(null);

  const prefixCls = getPrefixCls('affix');

  const handleScroll = useEvent(
    debounceByRaf(() => {
      const affixDom = affixRef.current;
      const affixWrapDom = affixWrapRef.current;
      const scrollContainerDom = scrollContainer.current;
      if (!affixDom || !affixWrapDom || !scrollContainerDom) return;

      const placeholderDom = placeholderEL.current;

      const { calcTop, calcBottom, containerToTop, wrapToTop, wrapWidth, wrapHeight } = calcTopAndBottom({
        affixWrap: affixWrapDom,
        scrollContainer: scrollContainerDom!,
        offsetBottom,
      });

      const fixedTop = getFixedTop({ calcTop, offsetTop, calcBottom, containerToTop, wrapToTop });
      const affixed = fixedTop !== false;

      const isPlaceholderStatusChange = handleFixedToggle({
        affixDom,
        prefixCls,
        fixedTop,
        wrapWidth,
        wrapHeight,
        zIndex,
        placeholderDom,
        affixWrapDom,
        placeholderEL,
        affixed,
      });

      if (isPlaceholderStatusChange && isFunction(onFixedChange)) {
        onFixedChange(affixed, { top: +fixedTop });
      }
    })
  );

  useEffect(() => {
    /**
     * @zh 创建占位节点
     * @en Create a placeholder node
     **/
    placeholderEL.current = document.createElement('div');
  }, []);

  useEffect(() => {
    scrollContainer.current = getScrollContainer(container);
    let scrollParentsList = [];
    const needListParent = isNeedListParent({ isInScrollContainer, scrollContainer });

    if (isWindow(scrollContainer.current) || isHTMLElement(scrollContainer.current)) {
      handleScroll();
      scrollContainer.current.addEventListener('scroll', handleScroll);
      scrollParentsList = addScrollEvent({ needListParent, scrollContainer, handleScroll });
      window.addEventListener('resize', handleScroll);
      return () => {
        removeScrollEvent({ scrollParentsList, needListParent, scrollContainer, handleScroll });
        window.removeEventListener('resize', handleScroll);
      };
    }
  }, [container, handleScroll, isInScrollContainer]);

  return {
    handleScroll,
    affixWrapRef,
    affixRef,
  };
}
