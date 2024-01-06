import { CSSProperties, ReactNode } from 'react';

/**
 * @title Alert
 */
export interface AlertProps {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @zh 单独设置组件css自定义变量
   * @en Set component custom css variables individually
   */
  themeStyle?: Record<string, any>;
  /**
   * @zh 通知标题
   * @en Notification title
   */
  title?: ReactNode | string;
  /**
   * @zh 通知内容
   * @en Notification content
   */
  content: ReactNode | string;
  /**
   * @zh 是否显示图标
   * @en Whether to show the icon
   * @defaultValue true
   */
  showIcon?: boolean;
  /**
   * @zh 自定义图标
   * @en Custom icon
   * @default true
   */
  icon?: ReactNode;
  /**
   * @zh 关闭时的回调
   * @en Callback when close
   */
  onClose?: (...args: any) => void;
  /**
   * @zh 添加操作按钮
   * @en Add action button
   */
  operation?: ReactNode;
  /**
   * @zh 是否显示关闭按钮
   * @en Whether to show the close button
   */
  closable?: boolean;
  /**
   * @zh Alert类型
   * @en Alert type
   * @default info
   */
  type?: 'info' | 'success' | 'error' | 'warning' | 'loading';
}
