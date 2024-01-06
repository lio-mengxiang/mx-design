export function isScrollParent(element: Element | HTMLElement): boolean {
  const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['contents'].includes(display);
}
