/* eslint-disable quotes */
import React from 'react';
import { Basic, Async, Footer, Feedback, Update, Position } from './constants';

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
        传入 <code className="mx-code"> okButtonProps</code> 和 <code className="mx-code"> cancelButtonProps</code>
        可分别自定义确定按钮和取消按钮的 props。如果 <code className="mx-code"> okButtonProps</code> 和
        <code className="mx-code"> cancelButtonProps</code> 仍然不能满足需要的话，可以直接传入
        <code className="mx-code"> footer</code>来自定义页脚内容
      </>
    ),
  },
  [Feedback]: {
    title: '消息提示',
    desc: (
      <>
        有 <code className="mx-code">info</code>, <code className="mx-code">success</code>, <code className="mx-code">warning</code>,
        <code className="mx-code">error</code> 四种类型的消息提示，仅提供一个确认按钮用于关闭消息提示对话框。
      </>
    ),
  },
  [Position]: {
    title: '自定义位置',
    desc: (
      <>
        使用 css 局部变量自定义距离视口顶部的距离，使用方法：
        <code className="mx-code">{"themeStyle: { '--modal-top': 'xx距离' }"}</code>, 如果要居中，需要使用
        <code className="mx-code">calc(50% - modal框一半的高度)</code>
      </>
    ),
  },
  [Update]: {
    title: '手动更新和移除',
    desc: <>手动更新和关闭通过 Modal的方法创建的对话框</>,
  },
};
