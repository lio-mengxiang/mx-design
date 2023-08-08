export const getScrollBarWidth = (element: HTMLElement) => {
  return element.tagName === 'BODY'
    ? window.innerWidth - (document.body.clientWidth || document.documentElement.clientWidth)
    : element.offsetWidth - element.clientWidth;
};
