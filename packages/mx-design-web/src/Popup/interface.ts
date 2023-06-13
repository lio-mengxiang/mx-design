import { MouseEvent, KeyboardEvent, FocusEvent, WheelEvent, ReactNode, CSSProperties } from 'react';
import { usePopper } from '../Popper/use-popper';
import { PortalProps } from '../Portal';

export interface PopupProps {
  /**
   * 制定挂载节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default 'body'
   */
  attach?: PortalProps['attach'];
  /**
   * 浮层里面的内容
   */
  content?: ReactNode;
  /**
   * 是否禁用组件
   */
  disabled?: boolean;
  /**
   * 浮层类名，示例：'name1 name2 name3' 或 `['name1', 'name2']`
   */
  overlayClassName?: string | string[];
  /**
   * 浮层内容部分类名，示例：'name1 name2 name3' 或 `['name1', 'name2']`
   */
  overlayInnerClassName?: string | string[];
  /**
   * 浮层内容部分样式，第一个参数 `triggerElement` 表示触发元素 DOM 节点，第二个参数 `popupElement` 表示浮层元素 DOM 节点
   */
  overlayInnerStyle?: CSSProperties | ((triggerElement: HTMLElement, popupElement: HTMLElement) => CSSProperties);
  /**
   * 浮层样式，第一个参数 `triggerElement` 表示触发元素 DOM 节点，第二个参数 `popupElement` 表示浮层元素 DOM 节点
   */
  overlayStyle?: CSSProperties | ((triggerElement: HTMLElement, popupElement: HTMLElement) => CSSProperties);
  /**
   * 浮层出现位置
   * @default top
   */
  placement?:
    | 'left'
    | 'right'
    | 'bottom'
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end';
  /**
   * popper 初始化配置，详情参考 https://popper.js.org/docs/
   */
  popperOptions?: object;
  /**
   * 是否显示浮层箭头
   * @default false
   */
  showArrow?: boolean;
  /**
   * 触发浮层出现的方式
   * @default hover
   */
  trigger?: 'hover' | 'click' | 'focus' | 'mousedown' | 'context-menu';
  /**
   * 触发元素。值类型为字符串表示元素选择器
   */
  triggerElement?: ReactNode;
  /**
   * 是否显示浮层
   */
  visible?: boolean;
  /**
   * 是否显示浮层，非受控属性
   */
  defaultVisible?: boolean;
  /**
   * 组件层级，Web 侧样式默认为 5500，移动端和小程序样式默认为 1500
   */
  zIndex?: number;
  /**
   * 下拉选项滚动事件
   */
  onScroll?: (context: { e: WheelEvent<HTMLDivElement> }) => void;
  /**
   * 下拉滚动触底事件，常用于滚动到底执行具体业务逻辑
   */
  onScrollToBottom?: (context: { e: WheelEvent<HTMLDivElement> }) => void;
  /**
   * 当浮层隐藏或显示时触发，`trigger=document` 表示点击非浮层元素触发；`trigger=context-menu` 表示右击触发
   */
  onVisibleChange?: (visible: boolean, context: PopupVisibleChangeContext) => void;
}

export interface PopupVisibleChangeContext {
  e?: PopupTriggerEvent;
  trigger?: PopupTriggerSource;
}

export type PopupTriggerEvent = MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>;

export type PopupTriggerSource =
  | 'document'
  | 'trigger-element-click'
  | 'trigger-element-hover'
  | 'trigger-element-blur'
  | 'trigger-element-focus'
  | 'trigger-element-mousedown'
  | 'context-menu'
  | 'keydown-esc';

export interface PopupRef {
  // 获取popper实例
  getPopper: () => ReturnType<typeof usePopper>;
  // 获取Popup dom元素
  getPopupElement: () => HTMLDivElement;
  // 获取portal dom元素
  getPortalElement: () => HTMLDivElement;
}
