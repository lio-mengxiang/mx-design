import { isContainingBlock } from '../../Popper-js/utils/isContainingBlock';

export function getContainingBlock(element: Element) {
  let currentNode = element.parentElement;
  while (currentNode) {
    if (isContainingBlock(currentNode)) return currentNode;
    currentNode = currentNode.parentElement;
  }
  return null;
}
