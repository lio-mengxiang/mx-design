import { getBoundingClientRect } from './getBoundingClientRect';
import { getDocumentElement } from './getDocumentElement';
import { getNodeName } from './getNodeName';
import { getNodeScroll } from './getNodeScroll';
import { isElementScaled } from './isElementScaled';
import { isHTMLElement } from './isHTMLElement';
import { isScrollParent } from './isScrollParent';
import { getWindowScrollBarX } from './getWindowScrollBarX';
import type { Rect, VirtualElement } from '../interface';

// Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.
export function getCompositeRect(elementOrVirtualElement: Element | VirtualElement, offsetParent: Element | Window, isFixed): Rect {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent as HTMLElement);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);

  let scroll = { scrollLeft: 0, scrollTop: 0 };
  let offsets = { x: 0, y: 0 };
  if (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) {
    if (
      getNodeName(offsetParent as Element) !== 'body' ||
      // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)
    ) {
      scroll = getNodeScroll(offsetParent as HTMLElement | Window);
    }

    if (isOffsetParentAnElement) {
      offsets = getBoundingClientRect(offsetParent as HTMLElement, true);
      offsets.x += (offsetParent as HTMLElement).clientLeft;
      offsets.y += (offsetParent as HTMLElement).clientTop;
    } else if (documentElement as HTMLElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height,
  };
}
