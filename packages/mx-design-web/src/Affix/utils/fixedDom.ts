import { getOffsetParent } from '../../Popper-js/utils';
import { getNodeName } from '../../Popper-js/utils/getNodeName';
import { getParentNode } from '../../Popper-js/utils/getParentNode';
import { isContainingBlock } from '../../Popper-js/utils/isContainingBlock';
import { isHTMLElement } from '../../Popper-js/utils/isHTMLElement';

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
  const offsetParent = getContainingBlock(affixDom);
  affixDom.style.top = `${isHTMLElement(offsetParent) ? (fixedTop as number) - offsetParent.getBoundingClientRect().top : fixedTop}px`;
  affixDom.style.width = `${wrapWidth}px`;
  affixDom.style.height = `${wrapHeight}px`;

  if (zIndex) {
    affixDom.style.zIndex = `${zIndex}`;
  }
};

export function getContainingBlock(element: Element) {
  let currentNode: any = element.parentElement;
  while (currentNode) {
    if (isContainingBlock(currentNode)) return currentNode;
    currentNode = currentNode.parentElement;
  }
  return null;
}
