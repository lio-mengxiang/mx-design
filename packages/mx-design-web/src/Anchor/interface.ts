import React, { CSSProperties, ReactNode } from 'react';

/**
 * @title Anchor
 */
export interface AnchorProps {
  className?: string | string[];
  style?: CSSProperties;
  themeStyle?: Record<string, any>;
  /**
   * @zh 滚动容器。传入选择器或者dom元素。
   * @en Scrolling container. Pass in selector or DOM Element
   */
  scrollContainer?: string | HTMLElement | Window;
  /**
   * @zh 是否固定。当设置为 `true`时，锚点组件将会嵌套在[固钉](/react/components/affix) 组件内
   * @en Whether to wrap anchor within [Affix](/react/components/affix)
   * @defaultValue true
   */
  affix?: boolean;
  /**
   * @zh 通过该属性可以设置 `Affix` 组件的样式
   * @en The style to be applied to `Affix`
   */
  affixStyle?: CSSProperties;
  /**
   * @zh 距离窗口顶部达到指定偏移量后触发。即 `Affix` 固钉组件的 `offsetTop` 属性
   * @en Offset from the top of the viewport (in pixels). i.e. `Affix`'s `offsetTop` props
   */
  offsetTop?: number;
  /**
   * @zh 距离窗口底部达到指定偏移量后触发。 `Affix` 固钉组件的 `offsetBottom` 属性
   * @en Offset from the bottom of the viewport (in pixels). i.e. `Affix`'s `offsetBottom` props
   */
  offsetBottom?: number;
  /**
   * @zh 滚动时锚点改变或点击锚点时触发
   * @en Callback fired when anchor state changes
   */
  onChange?: (newLink: string, oldLink: string) => void;
  /**
   * @zh 点击锚点时候触发
   * @en Callback fired when anchor is clicked
   */
  onSelect?: (newLink: string, oldLink: string) => void;
  /**
   * @zh 没有左侧轴线的样式。
   * @en Whether to hide axis line of the left
   */
  lineless?: boolean;
  /**
   * @zh 滚动至距离目标锚点位置指定的偏移量 `offset` 时触发
   * @en Fired when scrolling to the specified offset `offset` from the target anchor position
   */
  offset?: number;
  items: baseAnchorLinkProps[];
}

export interface baseAnchorLinkProps {
  className?: string | string[];
  style?: CSSProperties;
  /**
   * @zh 锚点链接
   * @en The target that the hyperlink points to
   */
  href: string;
  /**
   * @zh 文本内容。可以是字符串或者自定义节点。
   * @en The content of the hyperlink
   */
  title?: string | React.ReactNode;
  key?: string | number;
  children?: baseAnchorLinkProps[];
}

/**
 * @title Anchor.Link
 */
export interface AnchorLinkProps {
  className?: string | string[];
  style?: CSSProperties;
  /**
   * @zh 锚点链接
   * @en The target that the hyperlink points to
   */
  href: string;
  /**
   * @zh 文本内容。可以是字符串或者自定义节点。
   * @en The content of the hyperlink
   */
  title?: string | React.ReactNode;
  key?: string | number;
  children?: ReactNode;
}
