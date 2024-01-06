/**
 * @zh 判断节点内容是否溢出
 * @en whether the node content is overflowing
 */
export const isNodeOverflow = (ele: Element | Element[]): boolean => {
  const { clientWidth = 0, scrollWidth = 0 } = ele as Element;

  if (scrollWidth > clientWidth) {
    return true;
  }
  return false;
};
