import React from 'react';
import { Basic, Column, Position, Dense, Responsive } from './constants';

export const zn_ch_gridLayout = {
  [Basic]: {
    title: '基础用法',
    desc: (
      <>
        <code className="mx-code">columns</code>表示分为多少列, <code className="mx-code">width</code>表示子元素占据多少列
      </>
    ),
  },
  [Column]: {
    title: '子元素从上到下排列',
    desc: (
      <>
        使用 <code className="mx-code">flow="column"</code> 可以使子元素从上到下排列（默认从左到右）. 这是css属性{' '}
        <code className="mx-code">grid-auto-flow</code>的映射
      </>
    ),
  },
  [Position]: {
    title: '自定义子元素位置',
    desc: (
      <>
        使用 <code className="mx-code">left</code> 和 <code className="mx-code">top</code> 属性来自定义子元素位置，它们是css属性
        <code className="mx-code">grid-column-start</code> and <code className="mx-code">grid-row-start</code> 的映射
      </>
    ),
  },
  [Dense]: {
    title: '密集布局',
    desc: (
      <div>
        默认情况，使用row <code className="mx-code">overlayInnerStyle</code> 来设置不同的颜色
      </div>
    ),
  },
  [Responsive]: {
    title: '自适应布局',
    desc: (
      <div>
        css 属性<code className="mx-code">grid-template-columns</code> 可以很好地帮助我们建立自适应布局. 当 columns 属性是数字, ，也就是
        css属性<code className="mx-code">grid-template-columns</code> 在GridLayout组件里的简写，内部使用了
        <code className="mx-code">repeat(columns, 1fr)</code> 去设置columns.
      </div>
    ),
  },
};
