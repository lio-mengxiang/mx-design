import React from 'react';
import { Basic, Disabled, Group, Icon, Loading, Long, Status } from './constants';

export const en_us_button = {
  [Basic]: {
    title: 'Basic',
    desc: (
      <>
        There are<code className="mx-code">brand</code>、<code className="mx-code">outline</code> 和 and
        <code className="mx-code">text button</code>types
      </>
    ),
  },
  [Icon]: {
    title: 'Icon',
    desc: (
      <>
        Icons can be used in buttons. When <code className="mx-code">icon</code> is set and there are no children, the height and width of
        the button are equal
      </>
    ),
  },
  [Status]: {
    title: 'Status',
    desc: (
      <>
        Buttons can be in <code className="mx-code">brand</code>，<code className="mx-code">warning</code>，
        <code className="mx-code">error</code>,<code className="mx-code">success</code> and <code className="mx-code">default(gray)</code>
        status. Status can co-exist with type but with higher priority
      </>
    ),
  },
  [Disabled]: {
    title: 'Disabled',
    desc: 'The disabled state of the button',
  },
  [Loading]: {
    title: 'Loading',
    desc: (
      <>
        A button can be on <code className="mx-code">loading</code> state by setting loading. Click events are not triggered when buttons
        are on loading state.
      </>
    ),
  },
  [Group]: {
    title: 'Button group',
    desc: <>Button group can be used to group together operation buttons at the same level</>,
  },
  [Long]: {
    title: 'Long',
    desc: <>The button width adapts to the container width</>,
  },
};
