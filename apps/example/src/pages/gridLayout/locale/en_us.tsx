import React from 'react';
import { Basic, Column, Position, Dense, Responsive } from './constants';

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
        You can use the <code className="mx-code">left</code> and <code className="mx-code">top</code> props to set the{' '}
        <code className="mx-code">grid-column-start</code> and <code className="mx-code">grid-row-start</code> CSS properties
      </>
    ),
  },
  [Dense]: {
    title: 'Style and className',
    desc: (
      <div>
        You can use the <code className="mx-code">overlayInnerStyle</code> property to set different colors
      </div>
    ),
  },
  [Responsive]: {
    title: 'Responsive Layout',
    desc: (
      <div>
        The <code className="mx-code">grid-template-columns</code> CSS property can great help in building responsive layouts. When the
        columns prop is a number, it is a shorthand for <code className="mx-code">grid-template-columns</code> and we use
        <code className="mx-code">repeat(columns, 1fr)</code> to set columns.
      </div>
    ),
  },
};
