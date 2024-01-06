import React from 'react';
import { Basic, Column, Position, HolyGrail, ContainerAlign, ContainerJustify } from './constants';

export const en_us_gridLayout = {
  [Basic]: {
    title: 'Basic',
    desc: (
      <>
        <code className="mx-code">columns</code>indicates how many columns are divided into, <code className="mx-code">width</code>indicates
        how many columns the child element have
      </>
    ),
  },
  [Column]: {
    title: 'Column',
    desc: (
      <>
        Use <code className="mx-code">flow='column'</code> to the Grid component, which can sort the child elements from top to bottom. This
        maps directly to the <code className="mx-code">grid-auto-flow</code> CSS property
      </>
    ),
  },
  [Position]: {
    title: 'Customize child element placement',
    desc: (
      <>
        Implementing the Holy Grail layout is simple using a grid layout, where the <code className="mx-code">rows</code> attribute
        corresponds to the one in the gird layout
        <code className="mx-code">grid-template-rows</code>. In this example, we set the first and last lines to at least 45px height and
        use the auto keyword to make their height adaptive to the content height. If the middle row is set to 1fr, its width ADAPTS to the
        remaining space (width) of the parent container.
      </>
    ),
  },
  [HolyGrail]: {
    title: 'Style and className',
    desc: (
      <div>
        You can use the <code className="mx-code">overlayInnerStyle</code> property to set different colors
      </div>
    ),
  },
  [ContainerAlign]: {
    title: 'Vertical alignment',
    desc: (
      <div>
        Vertical alignment of rows can be modified using the <code className="mx-code">alignContent</code>
      </div>
    ),
  },
  [ContainerJustify]: {
    title: 'Horizontal alignment',
    desc: (
      <div>
        Horizontal alignment of columns can be modified using the <code className="mx-code">justifyContent</code>
      </div>
    ),
  },
};
