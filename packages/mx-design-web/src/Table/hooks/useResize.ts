import { useRef, useEffect, MutableRefObject } from 'react';
import { useResizeObserver } from '../../hooks';
import { getScrollBarHeight, getScrollBarWidth } from '../utils';

/**
 * @zh 监听在fixedHeader情况下(也就是scroll.y 有值), 有可能tbody出现滚动条，此时tbody、thead、tfoot的右侧滚动条必须加上
 * @en When fixedHeader is true, tbody may have scrollbar.The right scroll bar of Tbody、thead and tfoot  must be add.
 */
export function useResize({
  refTableHead,
  refTableFoot,
  refTableBody,
}: {
  refTableHead: MutableRefObject<HTMLElement>;
  refTableFoot: MutableRefObject<HTMLElement>;
  refTableBody: MutableRefObject<HTMLElement>;
}) {
  const scrollbarChanged = useRef<boolean>(false);

  function setScrollBarStyle() {
    // header and footer hide scrollbar in the bottom
    // if scroll.y exist, headWrapper will have value
    const headWrapper = refTableHead.current?.parentNode as HTMLElement;
    const scrollBarHeight = getScrollBarHeight(headWrapper);

    if (scrollBarHeight && scrollBarHeight > 0) {
      headWrapper.style.marginBottom = `-${scrollBarHeight}px`;
      headWrapper.style.paddingBottom = '0px';

      if (refTableFoot.current) {
        refTableFoot.current.style.marginBottom = `-${scrollBarHeight}px`;
        refTableFoot.current.style.paddingBottom = '0px';
      }
    }

    // if tbody have scrollbar thead and tfoot should align right edge, so overflowY should scroll
    setTimeout(() => {
      const scrollWrapper = refTableBody.current;
      const scrollBarWidth = getScrollBarWidth(scrollWrapper);
      if (scrollBarWidth) {
        scrollbarChanged.current = true;

        if (headWrapper) {
          headWrapper.style.overflowY = 'scroll';
        }

        if (refTableFoot.current) {
          refTableFoot.current.style.overflowY = 'scroll';
        }
      } else if (headWrapper && scrollbarChanged.current) {
        // if scroll.x change, we should change the overflowY value of the thead and tfoot simultaneously
        scrollbarChanged.current = false;
        headWrapper.style.overflowY = 'auto';

        if (refTableFoot.current) {
          refTableFoot.current.style.overflowY = 'auto';
        }
      }
    });
  }

  useEffect(() => {
    setScrollBarStyle();
  }, []);

  useResizeObserver(refTableBody.current, () => {
    setScrollBarStyle();
  });
}
