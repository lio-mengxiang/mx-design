import React from 'react';
import { Basic, Different, Update, Position, CustomBtn, CustomIcon, CustomStyle } from './constants';

export const zh_cn_notification = {
  [Basic]: {
    title: '基本用法',
    desc: '最简单的例子',
  },
  [Different]: {
    title: '不同类型',
    desc: (
      <>
        通知提醒框有 5 种不同的类型，分别为：
        <code className="mx-code">info</code>,<code className="mx-code">success</code>,<code className="mx-code">warning</code>,
        <code className="mx-code">error</code>,<code className="mx-code">loading</code>
      </>
    ),
  },
  [Update]: {
    title: '更新通知内容',
    desc: '通过指定 id，可以更新已经存在的通知提醒框',
  },
  [CustomBtn]: {
    title: '自定义操作按钮',
    desc: (
      <>
        通过指定 <code className="mx-code">btn</code>字段，可以添加操作按钮
      </>
    ),
  },
  [CustomIcon]: {
    title: '自定义icon',
    desc: (
      <>
        通过指定 <code className="mx-code">icon</code>来自定义图标
      </>
    ),
  },
  [CustomStyle]: {
    title: '自定义样式',
    desc: (
      <>
        可以设置 <code className="mx-code">style</code> 和 <code className="mx-code">className</code> 来定制样式
      </>
    ),
  },
  [Position]: {
    title: '通知提醒的位置',
    desc: <>通知提醒有 6 种不同的弹出位置，分别为"top" | "top-left" | "top-right" | "bottom-left" | "bottom" | "bottom-right"</>,
  },
};
