import React from 'react';
import { Basic, Type, Custom, Closable, NoIcon, Operation, Title } from './constants';

export const zn_ch_alert = {
  [Basic]: {
    title: '基本用法',
    desc: '展现需要关注的信息，适用于简短的警告提示',
  },
  [Type]: {
    title: '不同类型',
    desc: (
      <>
        警告提示的类型有<code className="mx-code">info</code>, <code className="mx-code">success</code>,{' '}
        <code className="mx-code">warning</code>, <code className="mx-code">error</code>, <code className="mx-code">loading</code>五种
      </>
    ),
  },
  [Custom]: {
    title: '自定义 Icon',
    desc: '这个示例展示了如何自定义Icon',
  },
  [Closable]: {
    title: '可关闭的',
    desc: (
      <>
        通过设置 <code className="mx-code">closable</code> 属性来关闭 Alert
      </>
    ),
  },
  [NoIcon]: {
    title: '不含图标',
    desc: (
      <>
        通过指定 <code className="mx-code">showIcon=false</code> 来不显示图标
      </>
    ),
  },
  [Operation]: {
    title: '带操作按钮的 Alert',
    desc: '可以配置 operation 来增加相关操作',
  },
  [Title]: {
    title: '含有标题',
    desc: (
      <>
        通过设置 <code className="mx-code">title=xxx</code> 可以给添加标题，将 content 变为辅助性介绍文字
      </>
    ),
  },
};
