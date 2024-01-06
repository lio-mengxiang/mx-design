import { PortalProps } from '../interface';

export function getAttach(attach: PortalProps['attach']): Element {
  let el: Element;
  if (typeof attach === 'string') {
    el = document.querySelector(attach);
    return el;
  }
  if (typeof attach === 'object' && attach instanceof window.HTMLElement) {
    el = attach;
    return el;
  }

  // fix el in iframe
  if ((el as Element)?.nodeType === 1) return el;

  return document.body;
}
