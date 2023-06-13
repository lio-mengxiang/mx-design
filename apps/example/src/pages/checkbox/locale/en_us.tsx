import { All, Basic, Controlled, CustomContent, CustomIcon, Group } from './constants';
import React from 'react';

export const en_us_checkbox = {
  [Basic]: {
    title: 'Basic Checkbox',
    desc: 'Basic selection operations',
  },
  [Controlled]: {
    title: 'Specifies the container',
    desc: 'Fixed elements relative to a specific container',
  },
  [Group]: {
    title: 'Checkbox group',
    desc: (
      <>
        Generate a group of checkboxes. If direction is <code className="mx-code">direction="vertical"</code>, the vertical checkbox group
        will be displayed
      </>
    ),
  },
  [All]: {
    title: 'Check all',
    desc: (
      <>
        The indeterminate effect can be achieved with <code className="mx-code">indeterminate</code>
      </>
    ),
  },
  [CustomContent]: {
    title: 'Custom Render Checkbox',
    desc: (
      <>
        Render nodes can be customized by passing a function of type <code className="mx-code">children</code>
      </>
    ),
  },
};
