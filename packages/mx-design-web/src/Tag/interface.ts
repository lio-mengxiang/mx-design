import React, { CSSProperties, HTMLAttributes, MouseEvent } from 'react';

export interface TagProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties;
  className?: string | string[];
  themeStyle?: Record<string, any>;
  /**
   * 组件子元素
   */
  children: React.ReactNode;
  /**
   * 标签是否可关闭
   * @default false
   */
  closable?: boolean;
  /**
   * 标签中的图标，可自定义图标呈现
   */
  icon?: React.ReactNode;
  /**
   * 标签最大宽度，宽度超出后会出现省略号。示例：'50px' / 80
   */
  maxWidth?: string | number;
  /**
   * 组件风格，用于描述组件不同的应用场景
   * @default default
   */
  status?: 'default' | 'brand' | 'warning' | 'danger' | 'success';
  /**
   * 标签风格变体
   * @default dark
   */
  type?: 'fill' | 'light' | 'outline' | 'light-outline';
  /**
   * 如果关闭按钮存在，点击关闭按钮时触发
   */
  onClose?: (e) => Promise<any> | void;
  visible: boolean;
  defaultVisible: boolean;
}
