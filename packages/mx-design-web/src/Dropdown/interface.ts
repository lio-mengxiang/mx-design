import React from 'react';
// types
import type { CSSProperties, ReactElement } from 'react';
import type { MenuItemProps } from '../Menu/HorizontalMenu/interface';
import type { PopupProps, PopupVisibleChangeContext } from '../Popup';

export interface DropdownProps {
  style?: CSSProperties;
  className?: string | string[];
  themeStyle?: Record<string, any>;
  /**
   * 浮层出现位置
   * @default top
   */
  placement?: PopupProps['placement'];
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: boolean;
  /**
   * 点击选项后是否自动隐藏弹窗
   * @default true
   */
  hideAfterItemClick?: boolean;
  /**
   * 弹窗最大高度，单位：px 。统一控制每一列的高度
   * @default none
   */
  maxHeight?: number;
  /**
   * 弹窗最大宽度度，单位：px 。统一控制每一列的高度
   * @default none
   */
  maxWidth?: number;
  /**
   * 下拉操作项
   * @default []
   */
  droplist?: MenuItemProps[];
  /**
   * 透传  Popup 组件属性，方便更加自由地控制。比如使用 popupProps.overlayStyle 设置浮层样式
   */
  popupProps?: Omit<PopupProps, 'children' | 'content' | 'visible' | 'isCloseClickAway'>;
  /**
   * 触发下拉显示的方式
   * @default hover
   */
  trigger?: 'hover' | 'click' | 'focus' | 'context-menu';
  /**
   * 点击叶子节点触发
   */
  onClick?: (key: string | number, e: PopupVisibleChangeContext) => void;
  /**
   * 控制下拉框是否默认打开
   */
  defaultPopupVisible?: boolean;
  /**
   * 自定义下拉菜单元素
   */
  customElement?: ReactElement;
  /**
   * 控制下拉框是否默认打开(受控模式)
   */
  popupVisible?: boolean;
  visibleStatus?: boolean;
  children: React.ReactNode;
}
