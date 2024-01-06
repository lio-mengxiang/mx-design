import React from 'react';
import { Basic, MaxWidth, Icon, Shape, Closable } from './constants';

export const en_us_tag = {
  [Basic]: {
    title: 'Basic',
    desc: 'Basic usage of tags',
  },
  [Icon]: {
    title: 'Icon',
    desc: (
      <>
        An icon can be added to the label by setting<code className="mx-code">icon</code>
      </>
    ),
  },
  [Closable]: {
    title: 'Closable',
    desc: (
      <>
        Buttons can be in <code className="mx-code">brand</code>，<code className="mx-code">warning</code>，
        <code className="mx-code">error</code>,<code className="mx-code">success</code> and <code className="mx-code">default(gray)</code>
        status. Status can co-exist with type but with higher priority
      </>
    ),
  },
  [MaxWidth]: {
    title: 'MaxWidth',
    desc: (
      <>
        Set the maximum width by using <code className="mx-code">maxWidth</code>
      </>
    ),
  },
  [Shape]: {
    title: 'Different shape',
    desc: (
      <>
        you can modify
        <code className="mx-code">css variable -tag-border-radius</code> to customize border-radius
      </>
    ),
  },
};
