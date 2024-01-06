/**
 * @zh 获取滚动到顶部的距离
 * @en Gets the scroll distance to the top
 */
export const getScrollTop = (el?: Window | Element | null | undefined) => {
  if (el === undefined) {
    el = window;
  }

  if (!el) return 0;

  return (el === window ? Math.ceil(window.pageYOffset) : (el as Element).scrollTop) || 0;
};
