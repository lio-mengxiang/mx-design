import React from 'react';
import { Basic, PageJumper, BufferSize, Total, Size, Step } from './constants';

export const zh_cn_pagination = {
  [Basic]: {
    title: '基本用法',
    desc: '最简单的用法',
  },
  [PageJumper]: {
    title: '快速跳转',
    desc: <>输入页码，可快速跳转到指定页</>,
  },
  [Size]: {
    title: '不同尺寸',
    desc: (
      <>
        通过 <code className="mx-code">themeStyle</code> 字段，传入自定义的css属性来改变 size
      </>
    ),
  },
  [Total]: {
    title: '展示总数',
    desc: (
      <>
        通过设置 <code className="mx-code">showTotal</code> 来显示数据总数通过
      </>
    ),
  },
  [Step]: {
    title: '上一步和下一步',
    desc: (
      <>
        设置 <code className="mx-code">itemRender</code>, 可以自由定制分页按钮
      </>
    ),
  },
  [BufferSize]: {
    title: '省略页码时展示长度',
    desc: (
      <>
        通过 <code className="mx-code">bufferSize</code> 可以设置 current 页与 ... 之间的页码个数。 一个 ... 至少代表省略 2 页
      </>
    ),
  },
};
