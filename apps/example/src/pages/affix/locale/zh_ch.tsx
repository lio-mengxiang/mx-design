import React from 'react';
import { Basic, Container } from './constants';

export const zn_ch_affix = {
  [Basic]: {
    title: '基础固钉',
    desc: (
      <>
        适用于页面结构简单的场景，默认容器是 <code className="mx-code">body</code>
      </>
    ),
  },
  [Container]: {
    title: '指定挂载的容器',
    desc: '相对于特定的容器来固定元素',
  },
};
