import { Align, Basic, Size, Split, Vertical } from './constants';
import React from 'react';

export const en_us_space = {
  [Basic]: {
    title: 'Basic',
    desc: <>Basic usage of spacing components</>,
  },
  [Vertical]: {
    title: 'Vertical',
    desc: 'You can set the spacing in the vertical direction',
  },
  [Size]: {
    title: 'Size',
    desc: 'Support to pass numbers to customize the size',
  },
  [Align]: {
    title: 'Align',
    desc: (
      <>
        There are 4 built-in alignment methods, <code className="mx-code">start</code>,<code className="mx-code">center</code>,
        <code className="mx-code">end</code>
        <code className="mx-code">baseline</code>and the default is center in horizontal mode
      </>
    ),
  },
  [Split]: {
    title: 'Split',
    desc: 'Set separators for adjacent child elements',
  },
};
