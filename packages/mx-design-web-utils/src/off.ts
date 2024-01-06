import { isServerRendering } from './isServerRendering';
import { noop } from './noop';

export const off = function (
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
  return element?.removeEventListener(event, handler, options || false);
};
