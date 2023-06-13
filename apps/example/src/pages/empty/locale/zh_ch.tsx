import React from 'react';
import { Basic, CustomIcon, CustomPic } from './constants';

export const zn_ch_empty = {
  [Basic]: {
    title: '基本用法',
    desc: 'Empty 空状态组件的基础用法',
  },
  [CustomIcon]: {
    title: '自定义图标和文案',
    desc: (
      <>
        可以通过 <code className="mx-code">icon</code> 参数传入自定义图标，<code className="mx-code">description</code> 修改显示文案
      </>
    ),
  },
  [CustomPic]: {
    title: '自定义图片',
    desc: (
      <>
        可以通过 <code className="mx-code">imgSrc</code> 参数传入图片 Url
      </>
    ),
  },
};
