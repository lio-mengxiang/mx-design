import React from 'react';
import { Basic, Container, Custom, Delay, Size, Tip } from './constants';

export const zn_ch_spin = {
  [Basic]: {
    title: '基本用法',
    desc: '一个简单的 loading 状态',
  },
  [Container]: {
    title: '容器中',
    desc: (
      <>
        可以给任意元素添加加载状态。容器默认是 block 布局，当你需要inline-block样式，可以设置
        <code className="mx-code">{`block={false}`}</code>
      </>
    ),
  },
  [Tip]: {
    title: '自定义描述文案',
    desc: (
      <>
        通过 <code className="mx-code">tip</code> 字段自定义加载时的文案
      </>
    ),
  },
  [Delay]: {
    title: '延迟',
    desc: (
      <>
        通过 <code className="mx-code">delay</code> 延迟显示 loading，对状态切换进行防抖处理，有效避免状态快速切换时的屏幕闪烁
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
  [Size]: {
    title: '不同尺寸',
    desc: '设置 size 可以得到不同尺寸的加载图标',
  },
};
