import React, { useEffect, forwardRef, useCallback, useImperativeHandle, useRef, useContext } from 'react';
import { getScrollContainer, calcTopAndBottom, fixedDom, getFixedTop, fixedPlaceholder } from './utils';
import { ConfigContext } from '../ConfigProvider';
import { useMergeProps, debounceByRaf } from '@mx-design/hooks';
import { isFunction } from '@mx-design/web-utils';
// type
import type { AffixProps } from './interface';
import type { ScrollContainerElement } from './utils';

export interface AffixRef {
  handleScroll: () => void;
}

const defaultProps: Partial<AffixProps> = { container: () => window, offsetBottom: 0, offsetTop: 0 };

function Affix(baseProps: AffixProps, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<AffixProps>(baseProps, defaultProps, componentConfig?.Affix);
  const { children, zIndex, container, offsetBottom, offsetTop, className, style, onFixedChange } = props;

  const affixRef = useRef<HTMLDivElement | null>(null);
  const affixWrapRef = useRef<HTMLDivElement | null>(null);
  const placeholderEL = useRef<HTMLElement | null>(null);
  const scrollContainer = useRef<ScrollContainerElement | null>(null);

  const prefixCls = getPrefixCls('affix');

  const handleScroll = useCallback(
    debounceByRaf(() => {
      const affixDom = affixRef.current;
      const affixWrapDom = affixWrapRef.current;
      console.log('affixWrapDom: ', affixWrapDom);
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

  useImperativeHandle(ref, () => ({
    handleScroll,
  }));

  useEffect(() => {
    /**
     * @zh 创建占位节点
     * @en Create a placeholder node
     **/
    placeholderEL.current = document.createElement('div');
  }, []);

  useEffect(() => {
    scrollContainer.current = getScrollContainer(container);
    if (scrollContainer.current) {
      handleScroll();
      scrollContainer.current.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);

      return () => {
        scrollContainer.current!.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }
  }, [container, handleScroll, scrollContainer]);

  return (
    <div ref={affixWrapRef} className={className} style={style}>
      <div ref={affixRef}>{children}</div>
    </div>
  );
}

const AffixComponent = forwardRef<unknown, AffixProps>(Affix);

AffixComponent.displayName = 'Affix';

export default AffixComponent;
