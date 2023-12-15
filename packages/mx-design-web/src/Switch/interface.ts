import { CSSProperties, ReactNode, HTMLAttributes } from 'react';

/**
 * @title Switch
 */
export interface SwitchProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'className' | 'onChange'> {
  style?: CSSProperties;
  className?: string | string[];
  themeStyle?: Record<string, any>;
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled?: boolean;
  /**
   * @zh 点击开关的回调
   * @en Callback when click
   */
  onChange?: (value: boolean, event) => void;
  /**
   * @zh 开关打开时的文案，small 尺寸不生效。
   * @en The text when the switch is turned on, the small size does not work.
   */
  checkedElement?: ReactNode;
  /**
   * @zh 开关关闭时的文案，small 尺寸不生效。
   * @en The text when the switch is turned off, the small size does not work.
   */
  unCheckedElement?: ReactNode;
  /**
   * @zh 开关关闭时，按钮上显示的图标
   * @en The icon displayed on the button when the switch is off
   */
  uncheckedIcon?: ReactNode;
  /**
   * @zh 开关打开时，按钮上显示的图标
   * @en The icon displayed on the button when the switch is turned on
   */
  checkedIcon?: ReactNode;
  /**
   * @zh 默认是否选中
   * @en To set default checked
   */
  defaultChecked?: boolean;
  /**
   * @zh 开关是否打开
   * @en To set checked
   */
  checked?: boolean;
  /**
   * @zh 加载中状态
   * @en Loading state
   */
  loading?: boolean;
  children?: ReactNode;
  loadingIconSize?: string;
  loadingIconBorderWidth?: string;
}
