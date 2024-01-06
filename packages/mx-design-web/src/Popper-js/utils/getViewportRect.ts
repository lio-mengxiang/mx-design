import { getDocumentElement } from './getDocumentElement';
import { isSafari } from './isSafari';
import type { PositioningStrategy } from '../interface';

export function getViewportRect(element: Element, strategy: PositioningStrategy) {
  const html = getDocumentElement(element);
  const { visualViewport } = window;

  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;

    const layoutViewport = isSafari();

    if (layoutViewport || (!layoutViewport && strategy === 'fixed')) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width,
    height,
    x,
    y,
  };
}
