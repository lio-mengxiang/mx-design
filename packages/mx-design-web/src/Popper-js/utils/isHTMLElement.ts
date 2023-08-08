export function isHTMLElement(node): node is HTMLElement {
  return node instanceof window.HTMLElement;
}
