import { isServerRendering } from './isServerRendering';
import { noop } from './noop';

export const on = function (
  element: EventTarget | null,
  event: string,
  // eslint-disable-next-line no-undef
  handler: EventListenerOrEventListenerObject,
  // eslint-disable-next-line no-undef
  options?: boolean | AddEventListenerOptions
) {
  if (isServerRendering()) {
    return noop;
  }
  return element?.addEventListener(event, handler, options || false);
};
