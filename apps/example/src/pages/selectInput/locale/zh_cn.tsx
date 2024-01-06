import React from 'react';
import { Basic, PrefixSuffix, Status } from './constants';

export const zh_cn_select_input = {
  [Basic]: {
    title: '基本用法',
    desc: '标签的基础用法',
  },
  [PrefixSuffix]: {
    title: '前缀和后缀标签',
    desc: (
      <div>
        <li style={{ lineHeight: '32px' }}>
          前置内容使用 <code className="mx-code">addBefore</code> 自定义
        </li>
        <li style={{ lineHeight: '32px' }}>
          后置内容使用 <code className="mx-code">addAfter</code> 自定义
        </li>
        <li style={{ lineHeight: '32px' }}>
          前置图标使用 <code className="mx-code">prefix</code> 自定义
        </li>
        <li style={{ lineHeight: '32px' }}>
          后置图标使用 <code className="mx-code">suffix</code> 自定义
        </li>
      </div>
    ),
  },
  [Status]: {
    title: '按钮状态',
    desc: (
      <>
        可设置 <code className="mx-code">closable</code> 属性控制标签是否可关闭，可关闭标签可通过 <code className="mx-code">onClose</code>
        事件执行一些关闭后操作。也可通过
        <code className="mx-code">visible</code> 属性控制标签的显示隐藏
      </>
    ),
  },
};
