interface IFixedDomProps {
  affixDom: HTMLDivElement;
  prefixCls: string;
  fixedTop: number | false;
  wrapWidth: number;
  wrapHeight: number;
  zIndex?: number;
}

/**
 * @zh 计算如果是fixed状态，fixed元素距离页面顶部的距离
 * @en Calculate how far the fixed element is from the top of the viewport if it is in a fixed state
 */
export const fixedDom = ({ affixDom, prefixCls, fixedTop, wrapWidth, wrapHeight, zIndex }: IFixedDomProps) => {
  affixDom.className = prefixCls;
  affixDom.style.top = `${fixedTop}px`;
  affixDom.style.width = `${wrapWidth}px`;
  affixDom.style.height = `${wrapHeight}px`;

  if (zIndex) {
    affixDom.style.zIndex = `${zIndex}`;
  }
};
