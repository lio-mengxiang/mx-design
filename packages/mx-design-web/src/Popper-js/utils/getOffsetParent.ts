import { getContainingBlock } from './getContainingBlock';
import { getNodeName } from './getNodeName';
import { getTrueOffsetParent } from './getTrueOffsetParent';
import getWindow from './getWindow';
import { isContainingBlock } from './isContainingBlock';
import { isTableElement } from './isTableElement';

/**
 * Normally, getOffsetParent returns the offsetParent of the element
 * The special case is when the element is fixed positioned, and the offsetParent is the containing block or window
 * if offsetParent of the element is TableElement(Table, td, th), it will be ignore and keep looking up
 * the offsetParent of the element, which is html or body and position is static, is window
 */
export function getOffsetParent(element: Element) {
  const window = getWindow(element);

  let offsetParent = getTrueOffsetParent(element);

  // https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetParent
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  // https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetParent
  if (
    offsetParent &&
    (getNodeName(offsetParent) === 'html' ||
      (getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && !isContainingBlock(offsetParent)))
  ) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
