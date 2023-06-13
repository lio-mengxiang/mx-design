import type { PopupProps } from '../Popup';

export interface TooltipProps extends PopupProps {
  /**
   * 浮层出现位置
   * @default top
   */
  placement?: PopupProps['placement'];
  /**
   * 是否显示浮层箭头
   * @default true
   */
  showArrow?: boolean;
}
