import { getNodeName } from './getNodeName';

export function isTableElement(element: Element): boolean {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
