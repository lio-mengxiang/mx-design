import React from 'react';
import { Basic, Different, Custom, Update, Close, Position, ShowClose } from './constants';

export const zh_cn_message = {
  [Basic]: {
    title: '基本用法',
    desc: '最简单的例子',
  },
  [Different]: {
    title: '不同类型',
    desc: (
      <>
        全局提示有 5 种不同的类型，分别为：
        <code className="mx-code">info</code>,<code className="mx-code">success</code>,<code className="mx-code">warning</code>,
        <code className="mx-code">error</code>,<code className="mx-code">normal</code>
      </>
    ),
  },
  [Custom]: {
    title: '自定义icon',
    desc: (
      <>
        通过指定 <code className="mx-code">element</code>属性 可以指定自定义图标作为加载组件
      </>
    ),
  },
  [Update]: {
    title: '更新全局提醒内容',
    desc: (
      <>
        通过指定 id，可以更新已经存在的全局提示。注意，<code className="mx-code">duration</code> 值为 <code className="mx-code">null</code>{' '}
        会取消当前 message 消息自动关闭功能
      </>
    ),
  },
  [Position]: {
    title: '全局提示的位置',
    desc: <>全局提示有 6 种不同的弹出位置，分别为"top" | "top-left" | "top-right" | "bottom-left" | "bottom" | "bottom-right"</>,
  },
  [Close]: {
    title: '手动控制关闭',
    desc: (
      <>
        <code className="mx-code"> Message.remove(id)</code> 能手动关闭通知，<code className="mx-code"> Message.clearAll()</code>
        能关闭所有通知
      </>
    ),
  },
  [ShowClose]: {
    title: '显示关闭按钮',
    desc: (
      <>
        设置 <code className="mx-code">closable</code> 来显示关闭按钮
      </>
    ),
  },
};
