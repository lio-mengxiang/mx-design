import { getCalcBottom } from './getCalcBottom';
import { getCalcTop } from './getCalcTop';
// type
import type { ScrollContainerElement } from '../interface';

interface ICalcTopAndBottomProps {
  affixWrap: HTMLDivElement;
  scrollContainer: ScrollContainerElement;
  offsetBottom?: number;
}

/**
 * @zh containerToTop，容器到页面顶部的距离, windows 为0
 * @zh calcTop: 节点顶部到 container 顶部的距离
 * @en containerToTop: The distance from the container to the top of the viewport
 * @en calcTop: the distance from the top of a node to the top of a container
 */
export const calcTopAndBottom = ({ affixWrap, scrollContainer, offsetBottom }: ICalcTopAndBottomProps) => {
  const { top: wrapToTop = 0, height: wrapHeight = 0, width: wrapWidth } = affixWrap.getBoundingClientRect() ?? { top: 0 };
  const { calcTop, containerToTop, scrollContainerTop } = getCalcTop({ scrollContainer, wrapToTop });
  const { calcBottom } = getCalcBottom({ scrollContainer, offsetBottom, wrapHeight, containerToTop });
  return { calcTop, containerToTop, calcBottom, wrapToTop, wrapWidth, wrapHeight, scrollContainerTop };
};
