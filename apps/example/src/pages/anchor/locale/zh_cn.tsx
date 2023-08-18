import React from 'react';
import { Basic, Affix, Lineless, ScrollBoundary } from './constants';

export const zh_cn_anchor = {
  [Basic]: {
    title: '基本用法',
    desc: (
      <>
        适用于普通页面， 但不建议传入 <code className="mx-code">affix</code>
        参数，而是用户在外层使用fixed定位，来获取更好的性能（affix组件会监听滚动事件）
      </>
    ),
  },
  [Affix]: {
    title: '使用affix定位组件',
    desc: '可以指定Affix组件距离顶部的触发条件（offsetTop），距离底部的触发条件（offsetBottom），以及affix组件的样式（affixStyle）',
  },
  [ScrollBoundary]: {
    title: '设置锚点滚动偏移量',
    desc: (
      <>
        可以设置 <code className="mx-code">offset</code> 来定制锚点滚动偏移量，注意，这里的偏移是指点击锚点定位的偏移量，跟定位偏移量无关
      </>
    ),
  },
  [Lineless]: {
    title: '无轴线模式',
    desc: (
      <>
        设置 <code className="mx-code">lineless</code> 时，可以使用无左侧轴线的锚点样式
      </>
    ),
  },
};
