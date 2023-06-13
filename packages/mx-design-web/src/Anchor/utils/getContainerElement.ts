import { isWindow } from '@mx-design/web-utils';

export function getContainerElement(scrollContainer: HTMLElement | Window) {
  return isWindow(scrollContainer) ? document.documentElement || document.body : scrollContainer;
}
