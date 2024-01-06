import React from 'react';
import { Basic, Disabled, Icon, Loading, Text, Size } from './constants';

export const zh_cn_switch = {
  [Basic]: {
    title: '基本用法',
    desc: <>最基础的用法</>,
  },
  [Disabled]: {
    title: '禁用按钮',
    desc: (
      <>
        通过 <code className="mx-code">disabled</code> 设置 <code className="mx-code">Switch</code> 为禁用状态。
      </>
    ),
  },
  [Icon]: {
    title: '图标按钮',
    desc: <>自定义开关按钮上显示的图标</>,
  },
  [Text]: {
    title: '自定义文案',
    desc: <>自定义开关打开（关闭）时需要显示的文字或者图标</>,
  },
  [Loading]: {
    title: '加载中按钮',
    desc: <>开关处于加载中状态，不可点击</>,
  },
  [Size]: {
    title: '不同尺寸的开关',
    desc: <>通过指定不同的 css 变量可以得到不同尺寸的开关</>,
  },
};
