export const translate2D = (style: CSSStyleDeclaration, x = 0, y = 0) => {
  style.transform = `translate(${x}px,${y}px)`;

  return style;
};

export const translate3D = (style: CSSStyleDeclaration, x = 0, y = 0) => {
  style.transform = `translate3d(${x}px,${y}px,0)`;
  style.backfaceVisibility = 'hidden';

  return style;
};
