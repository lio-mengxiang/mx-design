import { BOTTOM, BOTTOM_LEFT, BOTTOM_RIGHT, TOP, TOP_LEFT, TOP_RIGHT } from './constants';
import { AlertProps } from '../Alert';

/**
 * @title Toast
 */
export interface MessageProps extends AlertProps {
  /**
   * @zh 自动关闭的时间，单位为 `ms`
   * @en Automatic shutdown time, the unit is `ms`
   * @defaultValue 3000
   */
  duration?: number;
  /**
   * @zh 当前通知的唯一标识，可以用来更新消息
   * @en The unique identifier of the current notification, which can be used to update the message
   */
  id?: number;
  position?: IPosition;
}

export interface MessageManagerProps {
  position?: IPosition;
  duration?: number;
  showIcon?: boolean;
}

/**
 * @title NotificationCardProps
 */
export interface MessageCardProps extends MessageProps {
  remove: (...args: any[]) => void;
  position: IPosition;
  componentName?: 'Notification' | 'Toaster';
}

export interface MessageStates {
  [TOP]: MessageProps[];
  [TOP_LEFT]: MessageProps[];
  [TOP_RIGHT]: MessageProps[];
  [BOTTOM_LEFT]: MessageProps[];
  [BOTTOM]: MessageProps[];
  [BOTTOM_RIGHT]: MessageProps[];
}

export type IPosition = typeof TOP | typeof TOP_LEFT | typeof TOP_RIGHT | typeof BOTTOM_LEFT | typeof BOTTOM | typeof BOTTOM_RIGHT;
