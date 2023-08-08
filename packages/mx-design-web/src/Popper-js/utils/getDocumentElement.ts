import { isElement } from './isElement';

export function getDocumentElement(element: Element | Window): HTMLElement {
  return ((isElement(element) ? (element as Element).ownerDocument : (element as Window).document) || window.document).documentElement;
}
