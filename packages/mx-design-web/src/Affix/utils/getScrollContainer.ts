import { isString } from '@mx-design/web-utils';

export type ScrollContainerElement = Window | HTMLElement;
export type ScrollContainer = (() => ScrollContainerElement) | string;

export const getScrollContainer = (container: ScrollContainer = 'body'): ScrollContainerElement => {
  if (isString(container)) {
    return container ? (document.querySelector(container as string) as HTMLElement) : window;
  }
  if (typeof container === 'function') {
    return container();
  }
  return container as Window | HTMLElement;
};
