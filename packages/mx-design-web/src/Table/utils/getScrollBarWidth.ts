export function getScrollBarWidth(ele: HTMLElement | null) {
  return ele ? ele.offsetWidth - ele.clientWidth : 0;
}
