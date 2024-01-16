import React from 'react';
import {
  Basic,
  OffsetOfCol,
  PushPull,
  IntervalOfGrid,
  HorizontalLayout,
  VerticalLayout,
  ResponsiveLayout,
  Order,
  AdvancedResponsiveLayout,
  Flex,
} from './constants';

export const zh_cn_grid = {
  [Basic]: {
    title: '基本用法',
    desc: <>展示了最基本的 24 等分应用</>,
  },
  [OffsetOfCol]: {
    title: '栅格偏移',
    desc: (
      <>
        指定 <code className="mx-code">offset</code> 可以对栅格进行平移操作 时，按钮的高宽相等
      </>
    ),
  },
  [PushPull]: {
    title: '栅格排序',
    desc: (
      <>
        指定 <code className="mx-code">push</code> 或者 <code className="mx-code">pull</code> 可以对栅格进行排序
      </>
    ),
  },
  [IntervalOfGrid]: {
    title: '区块间隔',
    desc: (
      <>
        通过在 <code className="mx-code">gutter</code> 上指定 <code className="mx-code">Row</code>, 可以增加栅格的区域间隔
      </>
    ),
  },
  [HorizontalLayout]: {
    title: '水平布局',
    desc: (
      <>
        通过 <code className="mx-code">justify</code> 来进行水平布局
      </>
    ),
  },
  [VerticalLayout]: {
    title: '垂直布局',
    desc: (
      <>
        通过 <code className="mx-code">align</code> 来进行垂直布局
      </>
    ),
  },
  [ResponsiveLayout]: {
    title: '响应式布局',
    desc: (
      <>
        预置六种响应尺寸, 分别为 <code className="mx-code">xs</code>, <code className="mx-code">sm</code>,
        <code className="mx-code">md</code>, <code className="mx-code">lg</code>, <code className="mx-code">xl</code> and
        <code className="mx-code">xxl</code>
      </>
    ),
  },
  [Order]: {
    title: '排序',
    desc: (
      <>
        通过 <code className="mx-code">order</code> 来进行元素排序
      </>
    ),
  },
  [AdvancedResponsiveLayout]: {
    title: '其他属性的响应式',
    desc: (
      <>
        <code className="mx-code">span</code>, <code className="mx-code">offset</code>, <code className="mx-code">order</code>,{' '}
        <code className="mx-code">pull</code>, <code className="mx-code">push</code> 属性可以内嵌到 <code className="mx-code">xs</code>,
        <code className="mx-code">sm</code>, <code className="mx-code">md</code>, <code className="mx-code">lg</code>,{' '}
        <code className="mx-code">xl</code>, <code className="mx-code">xxl</code> 对象中使用. 比如,{' '}
        <code className="mx-code">
          {`xs=
          {8} 相当于 to xs={{ span: 8 }}`}
        </code>
      </>
    ),
  },
  [Flex]: {
    title: 'Flex 用法',
    desc: (
      <>
        通过设置 <code className="mx-code">Col</code> 组件的 <code className="mx-code">flex</code> 属性，可以任意配置 flex 布局
      </>
    ),
  },
};
