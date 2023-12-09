import { isWindow } from '@mx-design/web-utils';
import { MutableRefObject } from 'react';
import { findNode } from './findNode';
import { getContainerElement } from './getContainerElement';

interface IGetEleInViewport {
  scrollContainer: MutableRefObject<HTMLElement | Window>;
  linkMap: MutableRefObject<Map<string, HTMLElement>>;
}

/**
 * find the first anchor element which is show in the scrollContainer
 */
export function getEleInViewport({ linkMap, scrollContainer }: IGetEleInViewport) {
  const container = scrollContainer.current;
  const containerElement = getContainerElement(container);
  const containerRect = containerElement.getBoundingClientRect();
  const hashes = linkMap.current.keys();
  for (const hash of hashes) {
    const element = findNode(document, hash);
    let inView = false;
    if (element) {
      const { top } = element.getBoundingClientRect();
      if (isWindow(container)) {
        inView = top >= 0;
      } else {
        const offsetTop = top - containerRect.top;
        inView = offsetTop >= 0;
      }

      if (inView) {
        return element;
      }
    }
  }
  return null;
}
