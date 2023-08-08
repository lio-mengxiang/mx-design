import type { ClientRectObject, VirtualElement } from '../interface';
import { isHTMLElement } from './isHTMLElement';

/**
 * getBoundingClientRect width scaled
 */
export function getBoundingClientRect(element: Element | VirtualElement, includeScale: boolean = false): ClientRectObject {
  const clientRect = element.getBoundingClientRect();
  let scaleX = 1;
  let scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = (element as HTMLElement)?.offsetWidth > 0 ? Math.round(clientRect.width) / (element as HTMLElement).offsetWidth || 1 : 1;
    scaleY = (element as HTMLElement)?.offsetHeight > 0 ? Math.round(clientRect.height) / (element as HTMLElement).offsetHeight || 1 : 1;
  }

  const x = clientRect.left / scaleX;
  const y = clientRect.top / scaleY;
  const width = clientRect.width / scaleX;
  const height = clientRect.height / scaleY;

  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y,
  };
}
