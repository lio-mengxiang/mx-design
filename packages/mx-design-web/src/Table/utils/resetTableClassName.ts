export function resetTableClassName(classList: DOMTokenList, prefixCls: string) {
  classList.remove(`${prefixCls}-scroll-position-both`);
  classList.remove(`${prefixCls}-scroll-position-left`);
  classList.remove(`${prefixCls}-scroll-position-right`);
  classList.remove(`${prefixCls}-scroll-position-middle`);
}
