export function isElementScaled(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const scaleX = Math.round(rect.width) / element.offsetWidth || 1;
  const scaleY = Math.round(rect.height) / element.offsetHeight || 1;

  return scaleX !== 1 || scaleY !== 1;
}
