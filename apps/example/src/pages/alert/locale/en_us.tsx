import React from 'react';
import { Basic, Type, Custom, Closable, NoIcon, Operation, Title } from './constants';

export const en_us_alert = {
  [Basic]: {
    title: 'Basic',
    desc: 'Suitable for displaying short warning prompts in a way that attracts attention',
  },
  [Type]: {
    title: 'Different type',
    desc: (
      <>
        There are five types of warnings: <code className="mx-code">info</code>, <code className="mx-code">success</code>,{' '}
        <code className="mx-code">warning</code>, <code className="mx-code">error</code> and <code className="mx-code">loading</code>
      </>
    ),
  },
  [Custom]: {
    title: 'Customize Icon',
    desc: 'This example shows how to customize Icon',
  },
  [Closable]: {
    title: 'Closable',
    desc: (
      <>
        By specifying the <code className="mx-code">closable</code> field, it will can be closed
      </>
    ),
  },
  [NoIcon]: {
    title: 'Without icon',
    desc: (
      <>
        Use <code className="mx-code">showIcon=false</code> to hide the icon
      </>
    ),
  },
  [Operation]: {
    title: 'Alert with action button',
    desc: 'Operation can be configured to add operation field',
  },
  [Title]: {
    title: 'With title',
    desc: (
      <>
        Content is turned into auxiliary introduction text with presence of <code className="mx-code">title=xxx</code>
      </>
    ),
  },
};
