import { isHTMLElement } from './isHTMLElement';

/**
 * ignore position = fixed element
 */
export function getTrueOffsetParent(element: Element): Element | null {
  if (!isHTMLElement(element) || getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
}
