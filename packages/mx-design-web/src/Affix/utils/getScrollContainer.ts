import { isString } from '@mx-design/web-utils';
import type { ScrollContainer, ScrollContainerElement } from '../interface';

export const getScrollContainer = (container: ScrollContainer = 'body'): ScrollContainerElement => {
  if (isString(container)) {
    return container ? (document.querySelector(container as string) as HTMLElement) : window;
  }
  if (typeof container === 'function') {
    return container();
  }
  return container as Window | HTMLElement;
};
