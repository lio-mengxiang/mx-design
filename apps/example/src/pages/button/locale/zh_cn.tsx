import React from 'react';
import { Basic, Disabled, Group, Icon, Loading, Status } from './constants';

export const zh_cn_button = {
  [Basic]: {
    title: '基本用法',
    desc: (
      <>
        按钮分为<code className="mx-code">品牌色按钮</code>、<code className="mx-code">线形按钮</code> 和
        <code className="mx-code">文本按钮</code>三种
      </>
    ),
  },
  [Icon]: {
    title: '图标按钮',
    desc: (
      <>
        <code className="mx-code">Button</code>可以嵌入图标，在只设置图标而没有 children 时，按钮的高宽相等
      </>
    ),
  },
  [Status]: {
    title: '按钮状态',
    desc: (
      <>
        按钮状态分为<code className="mx-code">品牌色</code>，<code className="mx-code">警告色</code>，
        <code className="mx-code">错误色</code>，<code className="mx-code">成功色</code>，<code className="mx-code">默认(灰色)</code>
        五种，可以与按钮类型同时生效，优先级高于按钮类型
      </>
    ),
  },
  [Disabled]: {
    title: '禁用按钮',
    desc: '按钮的禁用状态',
  },
  [Loading]: {
    title: '加载中按钮',
    desc: (
      <>
        通过设置<code className="mx-code">loading</code>可以让一个按钮处于加载中状态。处于加载中状态的按钮不会触发点击事件
      </>
    ),
  },
  [Group]: {
    title: '组合按钮',
    desc: <>可用在同级多项操作，以按钮组合方式出现</>,
  },
};
