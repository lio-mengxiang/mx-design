import React, { ReactNode } from 'react';
import { ZN_CH, EN_US } from '../locale/constants';
import { SMALL_SIZE, MEDIUM_SIZE, LARGE_SIZE } from './constants';
import type { EmptyProps } from '../Empty';
import type { IconProps } from '../Icon';
import type { NotificationManagerProps } from '../Notification';
import type { ButtonProps } from '../Button';
import type { PopupProps } from '../Popup';
import type { SpinProps } from '../Spin';
import type { SpaceProps } from '../Space';
import type { TooltipProps } from '../Tooltip';
import type { DropdownProps } from '../Dropdown';
import type { CheckboxProps } from '../Checkbox';
import type { AlertProps } from '../Alert';
import type { AffixProps } from '../Affix';
import type { AnchorProps } from '../Anchor';
import type { MessageProps } from '../Message';
import type { RadioProps } from '../Radio';
import type { HorizontalMenuMenuProps } from '../Menu/HorizontalMenu/interface';
import type { GridLayoutProps } from '../GridLayout/interface';
import type { IToastRef } from '../Message/messageProvider';
import type { IRef } from '../Notification/notification';
// import type { TableProps } from '../Table/interface';

export interface ComponentConfig {
  Empty?: Partial<EmptyProps>;
  Icon?: Partial<IconProps>;
  Notification?: Partial<NotificationManagerProps>;
  Button?: Partial<ButtonProps>;
  Popup?: Partial<PopupProps>;
  Spin?: Partial<SpinProps>;
  Space?: Partial<SpaceProps>;
  // Menu?: Partial<MenuProps>;
  Tooltip?: Partial<TooltipProps>;
  Dropdown?: Partial<DropdownProps>;
  Checkbox?: Partial<CheckboxProps>;
  Radio?: Partial<RadioProps>;
  Alert?: Partial<AlertProps>;
  Affix?: Partial<AffixProps>;
  Anchor?: Partial<AnchorProps>;
  Message?: Partial<MessageProps>;
  HorizontalMenu?: Partial<HorizontalMenuMenuProps>;
  GridLayout?: Partial<GridLayoutProps>;
  // Table?: Partial<TableProps<any>>;
}

/**
 * @title ConfigProvider
 */
export interface ConfigProviderProps {
  componentConfig?: ComponentConfig;
  /**
   * @zh 当前语言
   * @en Current language
   * @defaultValue zn_ch
   */
  lang?: typeof ZN_CH | typeof EN_US;
  /**
   * @zh 配置组件的默认尺寸，只会对支持`size`属性的组件生效。
   * @en Configure the default size of the component, which will only take effect for components that support the `size` property.
   * @defaultValue medium
   */
  size?: typeof SMALL_SIZE | typeof MEDIUM_SIZE | typeof LARGE_SIZE;
  /**
   * @zh 全局组件类名前缀
   * @en Global ClassName prefix
   * @defaultValue mx
   */
  prefixCls?: string;
  /**
   * @zh 获取组件类名前缀的方法
   * @en Global ClassName prefix
   * @defaultValue mx-组件名
   */
  getPrefixCls?: (componentName: string, customPrefix?: string) => string;
  /**
   * @zh 全局弹出框挂载的父级节点。
   * @en The parent node of the global popup.
   * @defaultValue () => document.body
   */
  container?: HTMLElement;

  /**
   * @zh 全局配置组件内的空组件。
   * @en Empty component in component.
   */
  renderEmpty?: (componentName?: string) => ReactNode;
  _toastRef?: React.RefObject<IToastRef>;
  _notificationRef?: React.RefObject<IRef>;
}
