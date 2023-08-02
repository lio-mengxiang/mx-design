import React from 'react';
import { Basic, Column, Position, HolyGrail, ContainerAlign, ContainerJustify } from './constants';

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
  [HolyGrail]: {
    title: '圣杯布局',
    desc: (
      <div>
        使用grid布局实现圣杯布局是很简单的，其中<code className="mx-code">rows</code>属性对应gird布局中的
        <code className="mx-code">grid-template-rows</code>。
        在这个例子中，我们将第一行和最后一行设置为至少高度为45px，使用auto关键字让其高度自适应内容高度。中间行设置为1fr，则它的宽度会自适应父容器剩余的空间（宽度）
      </div>
    ),
  },
  [ContainerAlign]: {
    title: '垂直对齐',
    desc: (
      <div>
        可以使用<code className="mx-code">alignContent</code>来修改行的垂直对齐
      </div>
    ),
  },
  [ContainerJustify]: {
    title: '水平对齐',
    desc: (
      <div>
        可以使用<code className="mx-code">justifyContent</code>修改列的水平对齐
      </div>
    ),
  },
};
