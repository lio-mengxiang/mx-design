import React from 'react';
import { Basic, PrefixSuffix, LabelInValue, ValidateFormat, SaveOnBlur, RenderTag, TokenSeparator } from './constants';

export const zh_cn_input_tag = {
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
  [LabelInValue]: {
    title: '获取选项的值',
    desc: (
      <>
        可以通过设置 <code className="mx-code">labelInValue=true</code> 获取选项的传入的 value 值
      </>
    ),
  },
  [ValidateFormat]: {
    title: '校验与格式化输入',
    desc: (
      <>
        通过 <code className="mx-code">validate</code> 校验输入。此外，可以返回非布尔类型来将用户输入的字符串为特定的{' '}
        <code className="mx-code">value</code> 格式
      </>
    ),
  },
  [SaveOnBlur]: {
    title: '失焦时保存',
    desc: (
      <>
        设置 <code className="mx-code">saveOnBlur</code> 在失焦时自动将正在输入的文本保存为标签
      </>
    ),
  },
  [RenderTag]: {
    title: '自定义标签节点',
    desc: (
      <>
        指定 <code className="mx-code">renderTag</code> 来自定义标签节点
      </>
    ),
  },
  [TokenSeparator]: {
    title: '自动分词',
    desc: (
      <>
        设置 <code className="mx-code">tokenSeparators</code> 可以使用自动分词功能。尝试复制下方文本到输入框里
      </>
    ),
  },
};
