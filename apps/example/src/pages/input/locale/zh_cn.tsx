import React from 'react';
import { Basic, Label, Status, Suffix, Search, Limit, Password, Normalize } from './constants';

export const zh_cn_input = {
  [Basic]: {
    title: '基本用法',
    desc: '标签的基础用法',
  },
  [Status]: {
    title: '状态',
    desc: '不同的输入框状态',
  },
  [Label]: {
    title: '前置、后置标签',
    desc: (
      <>
        指定<code className="mx-code">addBefore</code>和<code className="mx-code">addAfter</code>在输入框前后添加元素
      </>
    ),
  },
  [Suffix]: {
    title: '前后缀',
    desc: (
      <>
        通过指定 <code className="mx-code">prefix</code> 和 <code className="mx-code">suffix</code>来在输入框内添加前缀和后缀
      </>
    ),
  },
  [Search]: {
    title: '搜索框',
    desc: <>带有搜索按钮的输入框，用于内容检索</>,
  },
  [Limit]: {
    title: '字数统计',
    desc: (
      <>
        设置<code className="mx-code">maxLength.length</code> 可以限制最大字数，配合 <code className="mx-code">showWordLimit</code>
        可以显示字数统计。 设置 <code className="mx-code">maxLength.errorOnly</code>
        后不会限制用户输入字数，但是超过最大字数会展示错误状态。 值得注意的是，如果配置了 showWordLimit，那么你将不能使用 suffix
      </>
    ),
  },
  [Password]: {
    title: '密码输入',
    desc: '用于密码的输入',
  },
  [Normalize]: {
    title: '格式化输入值',
    desc: '在指定时机对用户输入的值进行格式化处理',
  },
};
