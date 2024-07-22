import { CSSProperties, ReactNode } from 'react';

/**
 * @title AffixProps
 */
export interface AffixProps {
  /**
   * @zh 指定滚动的容器。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @en Specify the scroll container. If the data type is String, it will be treated as a selector and node query will be performed. Example:'body' or () => document.body
   * @default () => (() => window)
   */
  container?: ScrollContainer;
  /**
   * @zh 距离容器顶部达到指定距离后触发固定
   * @en When the distance from the top of the container reaches the specified distance, the trigger is fixed
   * @default 0
   */
  offsetTop?: number;
  /**
   * @zh 距离容器底部达到指定距离后触发固定
   * @en When the distance from the bottom of the container reaches the specified distance, the trigger is fixed
   * @default 0
   */
  offsetBottom?: number;
  /**
   * @zh 固钉定位层级，样式默认为 1000
   * @en Pin positioning level, style default is 1000
   */
  zIndex?: number;
  /**
   * @zh 固定状态发生变化时触发
   * @en Triggered when the fixed state changes
   */
  onFixedChange?: (affixed: boolean, context: { top: number }) => void;
  /**
   * @zh 如果固钉元素container，也就是指定滚动的容器不是window,并且希望滚动的时候不超出滚动容器，请设置这个参数为true
   * @en et this parameter to true if the pinned container element specifies a scroll container other than window and you want to scroll within the scroll container
   */
  isInScrollContainer?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export type ScrollContainerElement = Window | HTMLElement;
export type ScrollContainer = (() => ScrollContainerElement) | string;

export interface AffixRef {
  handleScroll: () => void;
}
