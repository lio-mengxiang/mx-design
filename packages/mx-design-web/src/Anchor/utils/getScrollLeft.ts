/**
 * @zh 获取滚动到左侧的距离
 * @en Get the distance scrolled to the left
 */
export const getScrollLeft = (el?: Window | Element | null | undefined) => {
  if (el === undefined) {
    el = window;
  }

  if (!el) return 0;

  return (el === window ? Math.ceil(window.pageXOffset || window.scrollX) : (el as Element).scrollLeft) || 0;
};
