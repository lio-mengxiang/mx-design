import { getNodeName } from './getNodeName';
import { getDocumentElement } from './getDocumentElement';

/**
 * A Node that is the parent of the current node. The parent of an element is an Element node, a Document node, or a DocumentFragment node
 */
export function getParentNode(element: Node): Node {
  if (getNodeName(element) === 'html') {
    return element;
  }
  return (
    element.parentNode ||
    // Fallback.
    getDocumentElement(element as Element)
  );
}
