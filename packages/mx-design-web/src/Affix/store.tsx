import { useEffect, useCallback, useRef } from 'react';
import { debounceByRaf } from '@mx-design/hooks';
import { isFunction, isWindow } from '@mx-design/web-utils';
import { getScrollContainer, calcTopAndBottom, fixedDom, getFixedTop, fixedPlaceholder } from './utils';
import { getNodeName } from '../Popper-js/utils/getNodeName';
// type
import type { ScrollContainerElement } from './utils';
import { isHTMLElement } from '../Popper-js/utils/isHTMLElement';
import { listScrollParents } from '../Popper-js/utils';

export function useStore(props) {
  // data
  const { getPrefixCls, zIndex, container, offsetBottom, offsetTop, onFixedChange, isInScrollContainer } = props;
  // dom ref
  const affixRef = useRef<HTMLDivElement | null>(null);
  const affixWrapRef = useRef<HTMLDivElement | null>(null);
  const placeholderEL = useRef<HTMLElement | null>(null);
  const scrollContainer = useRef<ScrollContainerElement | null>(null);

  const prefixCls = getPrefixCls('affix');

  const handleScroll = useCallback(
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
      let placeholderStatus = affixWrapDom.contains(placeholderEL.current);
      const prePlaceholderStatus = placeholderStatus;

      if (affixed) {
        /**
         * @zh 定位
         * @en position
         */
        fixedDom({ affixDom, prefixCls, fixedTop, wrapWidth, wrapHeight, zIndex });

        /**
         * @zh 插入占位节点
         * @en Insert the placeholder node
         */
        if (!placeholderStatus) {
          fixedPlaceholder({ placeholderDom, affixWrapDom, wrapWidth, wrapHeight });
          placeholderStatus = true;
        }
      } else if (affixDom.hasAttribute('class')) {
        affixDom.removeAttribute('class');
        affixDom.removeAttribute('style');

        /**
         * @zh 删除占位节点
         * @en Delete the placeholder node
         */
        if (placeholderStatus) {
          placeholderDom.remove();
          placeholderStatus = false;
        }
      }
      if (prePlaceholderStatus !== placeholderStatus && isFunction(onFixedChange)) {
        onFixedChange(affixed, { top: +fixedTop });
      }
    }),
    [offsetBottom, offsetTop, onFixedChange, prefixCls, zIndex]
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
    const needListParent =
      isInScrollContainer &&
      isHTMLElement(scrollContainer.current) &&
      ['html', 'body', '#document'].indexOf(getNodeName(scrollContainer.current)) <= 0;

    if (isWindow(scrollContainer.current) || isHTMLElement(scrollContainer.current)) {
      handleScroll();
      scrollContainer.current.addEventListener('scroll', handleScroll);
      if (needListParent) {
        scrollParentsList = listScrollParents(scrollContainer.current as HTMLElement);
        scrollParentsList.forEach((element) => {
          element.addEventListener('scroll', handleScroll);
        });
      } else {
        scrollContainer.current.addEventListener('scroll', handleScroll);
      }
      window.addEventListener('resize', handleScroll);

      return () => {
        if (needListParent) {
          scrollParentsList = listScrollParents(scrollContainer.current as HTMLElement);
          scrollParentsList.forEach((element) => {
            element.removeEventListener('scroll', handleScroll);
          });
        } else {
          scrollContainer.current!.removeEventListener('scroll', handleScroll);
        }

        window.removeEventListener('resize', handleScroll);
      };
    }
  }, [container, handleScroll, isInScrollContainer, scrollContainer]);

  return {
    handleScroll,
    affixWrapRef,
    affixRef,
  };
}
