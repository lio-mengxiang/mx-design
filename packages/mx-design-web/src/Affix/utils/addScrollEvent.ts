import { listScrollParents } from '../../Popper-js/utils';

export function addScrollEvent({ needListParent, scrollContainer, handleScroll }) {
  let scrollParentsList = [];
  if (needListParent) {
    scrollParentsList = listScrollParents(scrollContainer.current as HTMLElement);
    scrollParentsList.forEach((element) => {
      element.addEventListener('scroll', handleScroll);
    });
  } else {
    scrollContainer.current.addEventListener('scroll', handleScroll);
  }
  return scrollParentsList;
}
