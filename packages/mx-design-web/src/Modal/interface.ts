import type { HTMLAttributes, CSSProperties, MouseEvent, ReactNode } from 'react';
import type { ButtonProps } from '../Button';

export type ModalAlignType = 'left' | 'center' | 'right' | '';
export type ModalType = 'info' | 'error' | 'success' | 'warning';

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'id'> {
  id?: string | number;
  type?: ModalType;
  visible?: boolean;
  withoutLine?: boolean;
  withoutPadding?: boolean;
  mask?: boolean;
  okLoading?: boolean;
  title?: ReactNode | string;
  maskStyle?: CSSProperties;
  maskClosable?: boolean;
  hideCancel?: boolean;
  closable?: boolean;
  closeElement?: ReactNode;
  okText?: string;
  cancelText?: string;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  footer?: ReactNode;
  footerAlign?: ModalAlignType;
  focusLock?: boolean;
  onCancel?: () => void;
  onOk?: (e?: MouseEvent) => Promise<any> | void;
  afterOpen?: () => void;
  afterClose?: () => void;
  style?: CSSProperties;
  className?: string;
  themeStyle?: Record<string, any>;
  content: ReactNode;
  /**
   * @zh 指定弹出框挂载的父节点
   * @en Specify the parent node of the Modal
   * @defaultValue () => document.body
   */
  getMountContainer?: () => HTMLElement;
}

export interface ModalShowProps extends ModalProps {
  blockOkHide?: boolean;
  blockCancelHide?: boolean;
}
