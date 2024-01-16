import { CSSProperties, FocusEvent, KeyboardEvent } from 'react';
import type { PopupProps, PopupVisibleChangeContext } from '../Popup';
import type { MNode } from '../Common';
import type { InputProps } from '../Input';
import type { InputTagProps } from '../InputTag';

export interface SelectInputProps {
  style?: CSSProperties;
  className?: string | string[];
  // popup相关
  /**
   * 透传 Popup 浮层组件全部属性
   */
  popupProps?: PopupProps;
  /**
   * 是否显示下拉框
   */
  popupVisible?: boolean;
  /**
   * 无边框模式
   * @default false
   */
  borderless?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  allowDropDown?: boolean;
  /**
   * 下拉框内容，可完全自定义
   */
  panel?: MNode;
  // input和input-tag
  /**
   * 输入框的值
   */
  inputValue?: string;
  /**
   * 输入框的值，非受控属性
   */
  defaultInputValue?: string;
  /**
   * 全部标签值。值为数组表示多个标签，值为非数组表示单个数值
   */
  value?: SelectInputValue;
  /**
   * 透传 Input 输入框组件全部属性
   */
  inputProps?: InputProps;
  /**
   * 透传 Input 输入框组件全部属性
   */
  inputTagProps?: InputTagProps;
  /**
   * 是否为多选模式，默认为单选
   * @default false
   */
  multiple?: boolean;
  loading?: boolean;
  onPopupVisibleChange?: (visible: boolean, context: PopupVisibleChangeContext) => void;
}

export type SelectInputValue = string | number | boolean | Date | Object | Array<any> | Array<SelectInputValue>;

export interface SelectInputKeys {
  label?: string;
  value?: string;
  children?: string;
}

export interface SelectInputCommonProperties {}

export type TagInputValue = Array<string | number>;

export interface SelectInputFocusContext {
  tagInputValue?: TagInputValue;
  e: FocusEvent<HTMLInputElement>;
}

export interface SelectInputKeyboardContext {
  tagInputValue?: TagInputValue;
  e: KeyboardEvent<HTMLDivElement>;
}
