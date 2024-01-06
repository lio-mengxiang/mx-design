interface IGetFixedTop {
  calcTop: number;
  offsetTop: number;
  calcBottom: number;
  containerToTop: number;
  wrapToTop: number;
}
export const getFixedTop = ({ calcTop, offsetTop, calcBottom, containerToTop, wrapToTop }: IGetFixedTop) => {
  let fixedTop: number | false;
  if (calcTop <= offsetTop) {
    // top trigger
    fixedTop = containerToTop + offsetTop;
  } else if (wrapToTop >= calcBottom) {
    // bottom trigger
    fixedTop = calcBottom;
  } else {
    fixedTop = false;
  }

  return fixedTop;
};
