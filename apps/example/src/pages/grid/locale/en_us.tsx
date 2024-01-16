import React from 'react';
import {
  AdvancedResponsiveLayout,
  Basic,
  Flex,
  HorizontalLayout,
  IntervalOfGrid,
  OffsetOfCol,
  Order,
  PushPull,
  ResponsiveLayout,
  VerticalLayout,
} from './constants';

export const en_us_grid = {
  [Basic]: {
    title: 'Basic',
    desc: <>The basic usage of Grid</>,
  },
  [OffsetOfCol]: {
    title: 'Offset of Col',
    desc: (
      <>
        Specify <code className="mx-code">offset</code> to justify the padding of Col 时，按钮的高宽相等
      </>
    ),
  },
  [PushPull]: {
    title: 'Push pull',
    desc: (
      <>
        Specify <code className="mx-code">push</code> or <code className="mx-code">pull</code> to sort the grid
      </>
    ),
  },
  [IntervalOfGrid]: {
    title: 'Interval of Grid',
    desc: (
      <>
        By specifying <code className="mx-code">gutter</code> on <code className="mx-code">Row</code>, the area interval of the grid can be
        changed.
      </>
    ),
  },
  [HorizontalLayout]: {
    title: 'Horizontal layout',
    desc: (
      <>
        Use <code className="mx-code">justify</code> to customize horizontal layout
      </>
    ),
  },
  [VerticalLayout]: {
    title: 'Vertical layout',
    desc: (
      <>
        Use <code className="mx-code">align</code> to customize vertical layout
      </>
    ),
  },
  [ResponsiveLayout]: {
    title: 'Responsive layout',
    desc: (
      <>
        Six preset sizes are available: <code className="mx-code">xs</code>, <code className="mx-code">sm</code>,
        <code className="mx-code">md</code>, <code className="mx-code">lg</code>, <code className="mx-code">xl</code> and
        <code className="mx-code">xxl</code>
      </>
    ),
  },
  [Order]: {
    title: 'Order',
    desc: (
      <>
        Sort items by <code className="mx-code">order</code>
      </>
    ),
  },
  [AdvancedResponsiveLayout]: {
    title: 'Advanced responsive layout',
    desc: (
      <>
        The <code className="mx-code">span</code>, <code className="mx-code">offset</code>, <code className="mx-code">order</code>,{' '}
        <code className="mx-code">pull</code>, <code className="mx-code">push</code> properties can be used in{' '}
        <code className="mx-code">xs</code>,<code className="mx-code">sm</code>, <code className="mx-code">md</code>,{' '}
        <code className="mx-code">lg</code>, <code className="mx-code">xl</code>, <code className="mx-code">xxl</code> objects. For example,{' '}
        <code className="mx-code">
          {`xs=
          {8} is equivalent to xs={{ span: 8 }}`}
        </code>
      </>
    ),
  },
  [Flex]: {
    title: 'Flex',
    desc: (
      <>
        By setting the <code className="mx-code">flex</code> property of the <code className="mx-code">Col</code> component, you can
        configure the flex layout arbitrarily
      </>
    ),
  },
};
