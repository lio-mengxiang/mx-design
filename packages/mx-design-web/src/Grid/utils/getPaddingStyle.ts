export function getPaddingStyle(gutter, div) {
  const paddingStyle: {
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
  } = {};
  if (Array.isArray(gutter) && !div) {
    const paddingHorizontal = (gutter[0] && gutter[0] / 2) || 0;
    const paddingVertical = (gutter[1] && gutter[1] / 2) || 0;
    if (paddingHorizontal) {
      paddingStyle.paddingLeft = paddingHorizontal;
      paddingStyle.paddingRight = paddingHorizontal;
    }
    if (paddingVertical) {
      paddingStyle.paddingTop = paddingVertical;
      paddingStyle.paddingBottom = paddingVertical;
    }
  }
  return paddingStyle;
}
