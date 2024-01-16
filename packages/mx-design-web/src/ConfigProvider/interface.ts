import React, { ReactNode } from 'react';
import type { EmptyProps } from '../Empty';
import type { IconProps } from '../Icon';
import type { NotificationManagerProps, INotificationRef } from '../Notification';
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
import type { RadioProps } from '../Radio';
import type { HorizontalMenuMenuProps } from '../Menu/HorizontalMenu/interface';
import type { GridLayoutProps } from '../GridLayout';
import type { MessageProps, IMessageRef } from '../Message';
import type { ModalProps } from '../Modal/interface';
import type { IModalRef } from '../Modal';
import type { DrawerProps, IDrawerRef } from '../Drawer';
import type { InputProps } from '../Input';
import type { TagProps } from '../Tag';
import type { TableProps } from '../Table';
import type { PaginationProps } from '../Pagination';
import type { SwitchProps } from '../Switch/interface';
import type { InputTagProps } from '../InputTag';
import { EN_US, ZH_CN } from '../Locale/constants';
import type { ColProps, RowProps } from '../Grid';

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
  Table?: Partial<TableProps<any>>;
  Modal?: Partial<ModalProps>;
  Drawer?: Partial<DrawerProps>;
  Input: Partial<InputProps>;
  Tag: Partial<TagProps>;
  Pagination: Partial<PaginationProps>;
  Switch: Partial<SwitchProps>;
  InputTag: Partial<InputTagProps>;
  Row: Partial<RowProps>;
  Col: Partial<ColProps>;
}

/**
 * @title ConfigProvider
 */
export interface ConfigProviderProps {
  componentConfig?: ComponentConfig;
  /**
   * 全局组件库主题色
   */
  globalCssVariables?: Record<string, any>;
  /**
   * @zh 当前语言
   * @en Current language
   * @defaultValue zh_cn
   */
  lang?: typeof ZH_CN | typeof EN_US;
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
  _messageRef?: React.RefObject<IMessageRef>;
  _notificationRef?: React.RefObject<INotificationRef>;
  _modalRef?: React.RefObject<IModalRef>;
  _drawerRef?: React.RefObject<IDrawerRef>;
}
