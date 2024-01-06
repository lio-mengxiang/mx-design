export function getPagerStyle(pageItemStyle, isActive, activePageItemStyle) {
  if (isActive) {
    return { ...pageItemStyle, ...activePageItemStyle };
  }
  return pageItemStyle;
}
