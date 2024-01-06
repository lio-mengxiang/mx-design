import { Affix, Basic, Lineless, ScrollBoundary } from './constants';
import React from 'react';

export const en_us_anchor = {
  [Basic]: {
    title: 'Basic',
    desc: (
      <>
        Suitable for simple page, it is not recommended to pass in <code className="mx-code">affix</code> to has better performance
      </>
    ),
  },
  [Affix]: {
    title: 'Affix',
    desc: 'You can pass Affix offsetTop and offsetBottom to affix anchor.You can pass affixStyle to change affix component style',
  },
  [ScrollBoundary]: {
    title: 'Scroll Boundary',
    desc: (
      <>
        Use <code className="mx-code">offset</code> to customize the scrolling offset of the anchor， Note that the offset here refers to
        the offset of clicking on the anchor point, and has nothing to do with the positioning offset
      </>
    ),
  },
  [Lineless]: {
    title: 'Lineless',
    desc: (
      <>
        Use <code className="mx-code">lineless</code> to hide axis line on the left
      </>
    ),
  },
};
