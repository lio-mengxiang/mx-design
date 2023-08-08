import { getHTMLElementScroll } from './getHTMLElementScroll';
import { getWindowScroll } from './getWindowScroll';
import { isHTMLElement } from './isHTMLElement';

export function getNodeScroll(node: HTMLElement | Window) {
  if (node === window || !isHTMLElement(node)) {
    return getWindowScroll();
  }
  return getHTMLElementScroll(node as HTMLElement);
}
