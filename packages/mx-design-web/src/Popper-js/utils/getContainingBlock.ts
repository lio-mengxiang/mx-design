import { getNodeName } from './getNodeName';
import { getParentNode } from './getParentNode';
import { isContainingBlock } from './isContainingBlock';
import { isHTMLElement } from './isHTMLElement';

export function getContainingBlock(element: Element): HTMLElement | null {
  let currentNode: Node | null = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body', '#document'].indexOf(getNodeName(currentNode)) < 0) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    }
    currentNode = getParentNode(currentNode);
  }

  return null;
}
