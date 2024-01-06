import { CSSProperties, FocusEvent, ClipboardEvent, KeyboardEvent, MouseEvent } from 'react';
import type { MNode } from '../Common';
import type { InputProps } from '../Input';
import { PopupProps, PopupVisibleChangeContext } from '../Popup';
import { TagProps } from '../Tag';
import { InputTagProps } from '../InputTag';

export interface SelectInputProps {
  style?: CSSProperties;
  className?: string | string[];
  themeStyle?: Record<string, any>;
  /**
   * 是否允许输入
   * @default false
   */
  allowInput?: boolean;
  /**
   * 自动聚焦
   * @default false
   */
  autofocus?: boolean;
  /**
   * 无边框模式
   * @default false
   */
  borderless?: boolean;
  /**
   * 是否可清空
   * @default false
   */
  clearable?: boolean;
  /**
   * 标签过多的情况下，折叠项内容，默认为 `+N`。如果需要悬浮就显示其他内容，可以使用 `collapsedItems` 自定义。`value` 表示所有标签值，`collapsedTags` 表示折叠标签值，`count` 表示折叠的数量
   */
  collapsedItems?: MNode<{ value: SelectInputValue; collapsedTags: SelectInputValue; count: number }>;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 透传 Input 输入框组件全部属性
   */
  inputProps?: InputProps;
  /**
   * 输入框的值
   */
  inputValue?: string;
  /**
   * 输入框的值，非受控属性
   */
  defaultInputValue?: string;
  /**
   * 定义字段别名，示例：`{ label: 'text', value: 'id', children: 'list' }`
   */
  keys?: SelectInputKeys;
  /**
   * 左侧文本
   */
  label?: MNode;
  /**
   * 是否处于加载状态
   * @default false
   */
  loading?: boolean;
  /**
   * 最小折叠数量，用于标签数量过多的情况下折叠选中项，超出该数值的选中项折叠。值为 0 则表示不折叠
   * @default 0
   */
  minCollapsedNum?: number;
  /**
   * 是否为多选模式，默认为单选
   * @default false
   */
  multiple?: boolean;
  /**
   * 下拉框内容，可完全自定义
   */
  panel?: MNode;
  /**
   * 占位符
   * @default ''
   */
  placeholder?: string;
  /**
   * 透传 Popup 浮层组件全部属性
   */
  popupProps?: PopupProps;
  /**
   * 是否显示下拉框
   */
  popupVisible?: boolean;
  /**
   * 是否显示下拉框，非受控属性
   */
  defaultPopupVisible?: boolean;
  /**
   * 只读状态，值为真会隐藏输入框，且无法打开下拉框
   * @default false
   */
  readOnly?: boolean;
  /**
   * 输入框状态
   * @default default
   */
  status?: 'warning' | 'error';
  /**
   * 后置图标前的后置内容
   */
  suffix?: MNode;
  /**
   * 多选场景下，自定义选中标签的内部内容。注意和 `valueDisplay` 区分，`valueDisplay`  是用来定义全部标签内容，而非某一个标签
   */
  tag?: string | MNode<{ value: string | number }>;
  /**
   * 透传 TagInput 组件全部属性
   */
  tagInputProps?: InputTagProps;
  /**
   * 透传 Tag 标签组件全部属性
   */
  tagProps?: TagProps;
  /**
   * 全部标签值。值为数组表示多个标签，值为非数组表示单个数值
   */
  value?: SelectInputValue;
  /**
   * 自定义值呈现的全部内容，参数为所有标签的值
   */
  valueDisplay?: string | MNode<{ value: TagInputValue; onClose: (index: number, item?: any) => void }>;
  /**
   * 清空按钮点击时触发
   */
  onClear?: (e: MouseEvent<SVGSVGElement>) => void;
  /**
   * 按键按下 Enter 时触发
   */
  onEnter?: (value: SelectInputValue, context: SelectInputKeyboardContext) => void;
  /**
   * 聚焦时触发
   */
  onFocus?: (value: SelectInputValue, context: SelectInputFocusContext) => void;
  /**
   * 进入输入框时触发
   */
  onMouseenter?: (context: { e: MouseEvent<HTMLDivElement> }) => void;
  /**
   * 离开输入框时触发
   */
  onMouseleave?: (context: { e: MouseEvent<HTMLDivElement> }) => void;
  /**
   * 粘贴事件，`pasteValue` 表示粘贴板的内容
   */
  onPaste?: (e: ClipboardEvent<HTMLDivElement>) => void;
  /**
   * 下拉框显示或隐藏时触发
   */
  onPopupVisibleChange?: (visible: boolean, context: PopupVisibleChangeContext) => void;
  /**
   * 值变化时触发，参数 `context.trigger` 表示数据变化的触发来源；`context.index` 指当前变化项的下标；`context.item` 指当前变化项；`context.e` 表示事件参数
   */
  // onTagChange?: (value: TagInputValue, context: SelectInputChangeContext) => void;
}

export type SelectInputValue = string | number | boolean | Date | Object | Array<any> | Array<SelectInputValue>;

export interface SelectInputKeys {
  label?: string;
  value?: string;
  children?: string;
}

export interface SelectInputCommonProperties {
  status?: SelectInputProps['status'];
  clearable?: SelectInputProps['clearable'];
  disabled?: SelectInputProps['disabled'];
  label?: SelectInputProps['label'];
  placeholder?: SelectInputProps['placeholder'];
  readOnly?: SelectInputProps['readOnly'];
  suffix?: SelectInputProps['suffix'];
  onPaste?: SelectInputProps['onPaste'];
  onEnter?: SelectInputProps['onEnter'];
  onMouseenter?: SelectInputProps['onMouseenter'];
  onMouseleave?: SelectInputProps['onMouseleave'];
}

export type TagInputValue = Array<string | number>;

export interface SelectInputFocusContext {
  tagInputValue?: TagInputValue;
  e: FocusEvent<HTMLInputElement>;
}

export interface SelectInputKeyboardContext {
  tagInputValue?: TagInputValue;
  e: KeyboardEvent<HTMLDivElement>;
}
