import React from 'react';
import { All, Basic, Controlled, CustomContent, CustomIcon, Group } from './constants';

export const zn_ch_checkbox = {
  [Basic]: {
    title: '基础多选框',
    desc: '基础的选中操作',
  },
  [Controlled]: {
    title: '受控',
    desc: (
      <>
        通过 <code className="mx-code">checked</code> 属性控制是否选中
      </>
    ),
  },
  [Group]: {
    title: '复选框组',
    desc: (
      <>
        生成复选框组。设置 <code className="mx-code">direction="vertical"</code> 可以展示竖向的复选框组
      </>
    ),
  },
  [All]: {
    title: '全选',
    desc: (
      <>
        通过 <code className="mx-code">indeterminate</code> 属性可以实现半选效果
      </>
    ),
  },
  [CustomContent]: {
    title: '自定义渲染内容',
    desc: (
      <>
        可以通过传入函数类型的 <code className="mx-code">children</code> 来自定义渲染节点内容
      </>
    ),
  },
};
