import React from 'react';
import { Basic, MaxWidth, Icon, Shape, Closable } from './constants';

export const zh_cn_tag = {
  [Basic]: {
    title: '基本用法',
    desc: '标签的基础用法',
  },
  [Icon]: {
    title: '带图标的标签',
    desc: (
      <>
        可通过设<code className="mx-code">icon</code>在标签中加入图标
      </>
    ),
  },
  [Closable]: {
    title: '按钮状态',
    desc: (
      <>
        可设置 <code className="mx-code">closable</code> 属性控制标签是否可关闭，可关闭标签可通过 <code className="mx-code">onClose</code>
        事件执行一些关闭后操作。也可通过
        <code className="mx-code">visible</code> 属性控制标签的显示隐藏
      </>
    ),
  },
  [MaxWidth]: {
    title: '超长省略文本标签',
    desc: (
      <>
        通过 <code className="mx-code">maxWidth</code> 设置最大宽度，超出部分自动省略
      </>
    ),
  },
  [Shape]: {
    title: '不同的形状',
    desc: (
      <>
        你可以修改 <code className="mx-code">css变量 --tag-border-radius</code> 自定义 border-radius
      </>
    ),
  },
};
