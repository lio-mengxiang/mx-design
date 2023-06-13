import React from 'react';
import { Basic, Container, Custom, Delay, Size, Tip } from './constants';

export const en_us_spin = {
  [Basic]: {
    title: 'Basic',
    desc: 'A simple loading state',
  },
  [Container]: {
    title: 'As Container',
    desc: (
      <>
        You can add loading status to any element. The container defaults to the block layout. When you need to inline-block style, you can
        set <code className="mx-code">{`block={false}`}</code>
      </>
    ),
  },
  [Tip]: {
    title: 'Tip',
    desc: (
      <>
        Use <code className="mx-code">tip</code> property to customize the tip when loading.
      </>
    ),
  },
  [Delay]: {
    title: 'Delay',
    desc: (
      <>
        Use <code className="mx-code">delay</code> to delay the switch of loading status, which effectively avoids screen flicker during
        rapid state switching
      </>
    ),
  },
  [Custom]: {
    title: 'Custom Icon',
    desc: (
      <>
        By specifying <code className="mx-code">element</code> field, you can specify a custom icon as a loading component.
      </>
    ),
  },
  [Size]: {
    title: 'Size',
    desc: 'Set size to get different sizes of loading icons',
  },
};
