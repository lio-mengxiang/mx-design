import React from 'react';
import { Align, Basic, Size, Split, Vertical } from './constants';

export const zn_ch_space = {
  [Basic]: {
    title: '基本用法',
    desc: <>间距组件的基本用法</>,
  },
  [Vertical]: {
    title: '垂直间距',
    desc: '可以设置垂直方向排列的间距',
  },
  [Size]: {
    title: '尺寸',
    desc: '支持传数字来自定义尺寸',
  },
  [Align]: {
    title: '对齐',
    desc: (
      <>
        内置 4 种对齐方式，分别为<code className="mx-code">start</code>,<code className="mx-code">center</code>,
        <code className="mx-code">end</code>
        <code className="mx-code">baseline</code>，在水平模式下默认为 center
      </>
    ),
  },
  [Split]: {
    title: '分隔符',
    desc: '为相邻子元素设置分隔符',
  },
};
