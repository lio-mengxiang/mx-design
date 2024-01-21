import React from 'react';
import { Basic, Position, Disabled, DifferentTrigger, GetDisabledStatus, ItemStyle } from './constants';

export const zh_cn_dropdown = {
  [Basic]: {
    title: '基础弹出层',
    desc: '基础下拉菜单',
  },
  [Position]: {
    title: '弹出方向',
    desc: (
      <>
        通过 placement 支持指定 12 种弹出方位
        <code className="mx-code">left: 左</code>,<code className="mx-code">left-start: 左上</code>，
        <code className="mx-code">left-end: 左下</code>，<code className="mx-code">right: 右</code>,
        <code className="mx-code">right-start: 右上</code>,<code className="mx-code">right-end: 右下</code>,
        <code className="mx-code">bottom: 下</code>,<code className="mx-code">top: 上</code>,
        <code className="mx-code">top-start: 左上</code>,<code className="mx-code">top-end: 右上</code>,
        <code className="mx-code">bottom-start: 左下</code>,<code className="mx-code">bottom-end: 右下</code>
      </>
    ),
  },
  [Disabled]: {
    title: '禁用项和分割线',
    desc: <>设置禁用项和插入分割线</>,
  },
  [DifferentTrigger]: {
    title: '不同触发方式的弹出层',
    desc: (
      <>
        提供<code className="mx-code">悬浮时触发(默认)</code>、<code className="mx-code">点击时触发</code>、
        <code className="mx-code">获取焦点时触发</code>、<code className="mx-code">右击时触发</code>等方式
      </>
    ),
  },
  [GetDisabledStatus]: {
    title: '子组件获取 disabled 和 visible 状态',
    desc: (
      <div>
        子组件首先需要 <code className="mx-code">React.forwardRef</code> 将 <code className="mx-code">ref</code>
        元素赋值给 <code className="mx-code">dom</code>
        标签，然后这个子组件的 <code className="mx-code">props</code>
        中包含了 <code className="mx-code">disabled</code>
        参数来表示是否 <code className="mx-code">dropdown</code>
        是禁用态，也包含 <code className="mx-code">visible</code>
        参数表示 <code className="mx-code">dropdown</code> 是否是显示状态，最后需要把 <code className="mx-code">props</code>
        中的一些注册函数传递给子组件
      </div>
    ),
  },
  [ItemStyle]: {
    title: '自定义样式',
    desc: (
      <>
        通过传递 <code className="mx-code">style</code> 属性自定义样式
      </>
    ),
  },
};
