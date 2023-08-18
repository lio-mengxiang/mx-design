import React from 'react';
import { Basic, DifferentTrigger, FloatingLayer, Position } from './constants';

export const zh_cn_tooltip = {
  [Basic]: {
    title: '基础用法',
    desc: '',
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
  [Position]: {
    title: '不同的位置',
    desc: '通过 placement 属性设置不同的位置',
  },
  [FloatingLayer]: {
    title: '浮层样式',
    desc: (
      <div>
        浮层样式可以使用 <code className="mx-code">overlayInnerStyle</code> 来设置不同的颜色
      </div>
    ),
  },
};
