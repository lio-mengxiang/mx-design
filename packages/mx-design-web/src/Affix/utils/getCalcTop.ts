import type { ScrollContainerElement } from './getScrollContainer';

interface IGetCalcTopProps {
  scrollContainer: ScrollContainerElement;
  wrapToTop: number;
}

/**
 * containerToTop： calc distance from container to top of window
 * calcTop：calc distance from affix element to top of container
 */
export const getCalcTop = ({ scrollContainer, wrapToTop }: IGetCalcTopProps) => {
  let containerToTop = 0;
  let scrollContainerTop = 0;
  if (scrollContainer instanceof HTMLElement) {
    containerToTop = scrollContainer.getBoundingClientRect().top;
    scrollContainerTop = scrollContainer.getBoundingClientRect().top;
  }
  const calcTop = wrapToTop - containerToTop;

  return { calcTop, containerToTop, scrollContainerTop };
};
