import { getDocumentElement } from './getDocumentElement';
import { getWindowScroll } from './getWindowScroll';
import { getWindowScrollBarX } from './getWindowScrollBarX';
// type
import type { Rect } from '../interface';

export function getDocumentRect(element: HTMLElement): Rect {
  const html = getDocumentElement(element);
  const winScroll = getWindowScroll();
  const body = element.ownerDocument?.body;

  const width = Math.max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = Math.max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);

  const x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  const y = -winScroll.scrollTop;

  return { width, height, x, y };
}
