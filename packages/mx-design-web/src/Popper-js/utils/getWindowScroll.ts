export function getWindowScroll() {
  const scrollLeft = window.pageXOffset;
  const scrollTop = window.pageYOffset;

  return {
    scrollLeft,
    scrollTop,
  };
}
