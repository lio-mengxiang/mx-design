import React from 'react';
import { Basic, Custom, Data, DirectionIndicator, Editable, IconFont, InteractiveButton, Loading, PromptSuggestion } from './constants';

export const zh_cn_icon = {
  [Basic]: {
    title: '基础用法',
    desc: (
      <>
        通过<code className="mx-code">{`<IconXXX />`}</code>的形式即可使用Icon
      </>
    ),
  },
  [Loading]: {
    title: '加载中',
    desc: (
      <>
        通过指定<code className="mx-code">spin</code>字段，可以将图标设置为旋转状态
      </>
    ),
  },
  [Custom]: {
    title: '自定义Icon',
    desc: (
      <>
        这个示例展示了如何自定义Icon。配合<code className="mx-code">createIcon</code> API生成<code className="mx-code">React Icon</code>组件
      </>
    ),
  },
  [IconFont]: {
    title: '从 iconfont.cn 加载Icon',
    desc: (
      <>
        使用<code className="mx-code">createFromIconfont</code> API，并传入iconfont中Symbol的<code className="mx-code">url链接</code>
      </>
    ),
  },
  [PromptSuggestion]: {
    title: '提示建议类图标',
  },
  [DirectionIndicator]: {
    title: '方向指示类图标',
  },
  [Editable]: {
    title: '编辑类图标',
  },
  [InteractiveButton]: {
    title: '交互按钮类图标',
  },
  [Data]: {
    title: '数据类图标',
  },
};
