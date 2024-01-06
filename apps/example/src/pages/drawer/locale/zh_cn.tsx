/* eslint-disable quotes */
import React from 'react';
import { Basic, CustomizedElement, Mount, MultiLayer, Update, Position } from './constants';

export const zh_cn_drawer = {
  [Basic]: {
    title: '基本用法',
    desc: '基础抽屉，点击触发按钮抽屉从右侧滑出，点击遮罩区关闭',
  },
  [Position]: {
    title: '自定义位置',
    desc: '自定义位置，点击触发按钮抽屉从相应的位置滑出',
  },
  [CustomizedElement]: {
    title: '自定义节点',
    desc: (
      <>
        可以通过 <code className="mx-code">title</code> 属性和 <code className="mx-code">footer</code> 属性定制节点内容。当设置为 null
        时，将不会渲染对应的dom节点
      </>
    ),
  },
  [MultiLayer]: {
    title: '多层抽屉',
    desc: '在抽屉内打开新的抽屉',
  },
  [Mount]: {
    title: '挂载节点',
    desc: (
      <>
        可以通过 <code className="mx-code">getMountContainer</code> 指定抽屉挂载的父级节点
      </>
    ),
  },
  // [Update]: {
  //   title: '手动更新和移除',
  //   desc: <>手动更新和关闭通过 Modal的方法创建的对话框</>,
  // },
};
