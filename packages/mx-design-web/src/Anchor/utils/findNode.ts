export function findNode(dom: HTMLElement | Document, selector: string): HTMLElement | null {
  try {
    return dom.querySelector(selector);
  } catch (e) {
    // console.error(e);
    return null;
  }
}
