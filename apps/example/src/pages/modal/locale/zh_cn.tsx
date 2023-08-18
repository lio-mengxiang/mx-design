import React from 'react';
import { Basic, Async, Footer, Update, Close, Position, ShowClose } from './constants';

export const zh_cn_modal = {
  [Basic]: {
    title: '基本用法',
    desc: '最简单的例子',
  },
  [Async]: {
    title: '异步关闭',
    desc: <>在对话框中使用表单时，如提交表单，点击确定后异步关闭对话框</>,
  },
  [Footer]: {
    title: '自定义页脚',
    desc: (
      <>
        传入 <code className="mx-code"> okButtonProps</code> 和 <code className="mx-code"> cancelButtonProps</code>{' '}
        可分别自定义确定按钮和取消按钮的 props。如果 <code className="mx-code"> okButtonProps</code> 和{' '}
        <code className="mx-code"> cancelButtonProps</code> 仍然不能满足需要的话，可以直接传入
        <code className="mx-code"> footer</code>来自定义页脚内容
      </>
    ),
  },
  [Update]: {
    title: '更新全局提醒内容',
    desc: '通过指定 id，可以更新已经存在的全局提示',
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
