export function getScrollBarHeight(ele: HTMLElement | null) {
  return ele ? ele.offsetHeight - ele.clientHeight : 0;
}
