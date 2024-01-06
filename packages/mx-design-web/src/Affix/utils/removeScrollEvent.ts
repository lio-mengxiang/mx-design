export function removeScrollEvent({ scrollParentsList, needListParent, scrollContainer, handleScroll }) {
  if (needListParent) {
    scrollParentsList.forEach((element) => {
      element.removeEventListener('scroll', handleScroll);
    });
  } else {
    scrollContainer.current!.removeEventListener('scroll', handleScroll);
  }
}
