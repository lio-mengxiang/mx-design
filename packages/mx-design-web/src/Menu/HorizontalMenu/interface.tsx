import React, { CSSProperties, HTMLAttributes } from 'react';
import { PopupProps } from '../../Popup';

/**
 * @title Menu
 */
export interface HorizontalMenuMenuProps {
  style?: CSSProperties;
  className?: string | string[];
  placement?: PopupProps['placement'];
  disabled?: boolean;
  /**
   * @zh 菜单选项是否可选
   * @en Whether is the menu item selectable
   * @defaultValue true
   */
  selectable?: boolean;
  /**
   * @zh 水平菜单是否自动溢出省略
   * @en Whether the horizontal menu automatically collapses when it overflows
   * @defaultValue true
   */
  ellipsis?: boolean;
  /**
   * @zh 初始选中的菜单项 key 数组
   * @en The initially selected menu item's key array
   */
  defaultSelectedKeys?: string[];
  /**
   * @zh 选中的菜单项 key 数组（受控模式）
   * @en Selected menu item's key array
   */
  selectedKeys?: (number | string)[];
  /**
   * @zh 点击菜单项的回调
   * @en Click menu item callback
   */
  onClickMenuItem?: (key: string | number, event, keyPath: string[]) => any;
  /**
   * @zh 点击子菜单标题的回调
   * @en Callback when click sub menu
   */
  onClickSubMenu?: (key: string | number, keyPath: string[]) => void;
  /**
   * @zh 弹出模式下可接受所有 `PopupProps` 的 `Props`
   * @en Pass all `PopupProps` component properties
   */
  popupProps?: Partial<PopupProps>;
  menuList: MenuItemProps[];
}

export interface MenuItemProps extends Omit<HTMLAttributes<HTMLElement>, 'className' | 'children' | 'style' | 'title'> {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * 菜单项唯一标识
   */
  uid: number | string;
  /**
   * 菜单项标题
   */
  title: React.ReactNode;
  /**
   * 菜单项 icon
   */
  icon?: React.ReactNode;
  /**
   * 菜单项是否禁止点击
   */
  disabled?: boolean;
  /**
   * 子菜单项配置
   */
  children?: MenuItemProps[];
  divider?: boolean;
  _isHorizontal?: boolean;
}
