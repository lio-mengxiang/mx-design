import { CSSProperties, ReactNode } from 'react';

/**
 * @title Space
 */
export interface SpaceProps {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @zh 对齐方式
   * @en Alignment of items
   */
  align?: 'start' | 'end' | 'center' | 'baseline';
  /**
   * @zh 间距方向
   * @en The space direction
   * @defaultValue horizontal
   */
  direction?: 'vertical' | 'horizontal';
  /**
   * @zh 尺寸
   * @en The space size.
   * @defaultValue 8px
   */
  size?: number;
  children?: ReactNode;
  split?: ReactNode;
  wrap?: boolean;
  lastOneStyle?: CSSProperties;
}
