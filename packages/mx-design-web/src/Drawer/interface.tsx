import type { HTMLAttributes, CSSProperties, MouseEvent, ReactNode } from 'react';
import type { ButtonProps } from '../Button';

export type DrawerAlignType = 'left' | 'center' | 'right' | '';
export type DrawerPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface DrawerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'id'> {
  id?: string | number;
  /**
   * @zh 头部的样式
   * @en The additional css style for header
   */
  headerStyle?: CSSProperties;
  /**
   * @zh 自定义右上角关闭按钮
   * @en Custom the close button on top-right of the drawer dialog
   */
  closeIcon;
  /**
   * @zh 内容区域的样式
   * @en The additional css style for content
   */
  bodyStyle?: CSSProperties;
  mask?: boolean;
  okLoading?: boolean;
  title?: ReactNode | string;
  maskStyle?: CSSProperties;
  maskClosable?: boolean;
  hideCancelBtn?: boolean;
  showCloseIcon?: boolean;
  okText?: string;
  cancelText?: string;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  footer?: ReactNode;
  footerAlign?: DrawerAlignType;
  focusLock?: boolean;
  onCancel?: () => void;
  onOk?: <T = any>(e?: MouseEvent) => T;
  afterOpen?: () => void;
  afterClose?: () => void;
  style?: CSSProperties;
  className?: string;
  themeStyle?: Record<string, any>;
  content: ReactNode;
  placement: DrawerPlacement;
  /**
   * @zh 抽屉的宽度，`placement`为 `left` `right` 时生效
   * @en The width of the drawer dialog. Only works when `placement` is `left` or `right`
   * @defaultValue 332
   */
  width?: string | number;
  /**
   * @zh 抽屉的高度，`placement`为 `top` `bottom` 时生效
   * @en The height of the drawer dialog. Only works when `placement` is `top` or `bottom`
   * @defaultValue 332
   */
  height?: string | number;
  /**
   * @zh 指定弹出框挂载的父节点
   * @en Specify the parent node of the Modal
   * @defaultValue () => document.body
   */
  getMountContainer?: () => HTMLElement;
}
