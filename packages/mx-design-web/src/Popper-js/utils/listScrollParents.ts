import { getParentNode } from './getParentNode';
import { getScrollParent } from './getScrollParent';
import { isScrollParent } from './isScrollParent';
import getWindow from './getWindow';
// type
import type { Window, VisualViewport } from '../interface';

export function listScrollParents(
  element: Node,
  list: Array<Element | Window | VisualViewport> = []
): Array<Element | Window | VisualViewport> {
  const scrollParent = getScrollParent(element);
  const isBody = scrollParent === element.ownerDocument?.body;
  const win = getWindow(scrollParent);
  const target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  const updatedList = list.concat(target);

  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target as HTMLElement)));
}
