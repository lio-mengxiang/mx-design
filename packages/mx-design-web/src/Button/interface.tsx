/* eslint-disable max-len */
import React, { CSSProperties, HTMLProps, ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export interface BaseButtonProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
  themeStyle?: Record<string, any>;
  /**
   * @zh 按钮主要分为六种按钮类型：主要按钮、次级按钮、虚框按钮、文字按钮、线性按钮，`default` 为次级按钮。
   * @en A variety of button types are available: `primary`, `secondary`, `dashed`,`text`, `linear` and `default` which is the secondary.
   * @defaultValue default
   */
  type?: 'brand' | 'text' | 'outline';
  /**
   * @zh 按钮状态
   * @en Status of the button
   * @defaultValue default
   */
  status?: 'warning' | 'error' | 'success' | 'default';

  /**
   * @zh 添加跳转链接，设置此属性，button表现跟a标签一致
   * @en The button behaves like `<a>` with href as target url.
   */
  href?: string;
  /**
   * @zh a 链接的 target 属性，href 存在时生效
   * @en The target attribute of the link, which takes effect when href exists.
   */
  target?: string;
  /**
   * @zh a 链接的原生属性，href 存在时生效
   * @en The native attribute of the link, which takes effect when href exists
   */
  anchorProps?: HTMLProps<HTMLAnchorElement>;
  /**
   * @zh 是否禁用
   * @en Whether to disable the button
   */
  disabled?: boolean;
  /**
   * @zh 按钮是否是加载状态
   * @en Whether the button is in the loading state
   */
  loading?: boolean;
  /**
   * @zh 设置按钮的图标
   * @en Icon of the button
   */
  icon?: ReactNode;
  /**
   * @zh 只有图标，按钮宽高相等。如果指定 `icon` 且没有 children，`iconOnly` 默认为 true
   * @en Whether to show icon only, in which case the button width and height are equal. If `icon` is specified and there are no children, `iconOnly` defaults to `true`
   */
  iconOnly?: boolean;
  /**
   * @zh 按钮宽度随容器自适应。
   * @en Whether the width of the button should adapt to the container.
   */
  long?: boolean;
  /**
   * @zh 将按钮设置为紧凑模式，会失去内边距和悬浮时的阴影效果。
   * @en Setting a button to compact mode will remove the padding and the shadow effect when hovered over.
   */
  compact?: boolean;
  /**
   * @zh 点击按钮的回调
   * @en Callback fired when the button is clicked
   */
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  anchorProps?: HTMLProps<HTMLAnchorElement>;
} & BaseButtonProps &
  Omit<AnchorHTMLAttributes<any>, 'type' | 'onClick' | 'className'>;

export type FinalButtonProps = {
  /**
   * @zh 按钮原生的 html type 类型
   * @en html button type
   * @defaultValue button
   */
  htmlType?: 'button' | 'submit' | 'reset';
} & BaseButtonProps &
  Omit<ButtonHTMLAttributes<any>, 'type' | 'onClick' | 'className'>;

/**
 * @title Button
 */
export type ButtonProps = Partial<FinalButtonProps & AnchorButtonProps>;

export interface ButtonGroupProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
}
