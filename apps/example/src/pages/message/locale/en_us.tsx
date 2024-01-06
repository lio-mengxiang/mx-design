import React from 'react';
import { Basic, Different, Custom, Update, Close, Position, ShowClose } from './constants';

export const en_us_message = {
  [Basic]: {
    title: 'Basic',
    desc: 'The simplest usage',
  },
  [Different]: {
    title: 'Type',
    desc: (
      <>
        There are 5 different types of Message, <code className="mx-code">info</code>,<code className="mx-code">success</code> ,
        <code className="mx-code">warning</code> , <code className="mx-code">error</code>, <code className="mx-code">loading</code>
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
  [Update]: {
    title: 'Update',
    desc: 'By specifying the id, the existing Message can be updated',
  },
  [Position]: {
    title: 'Position',
    desc: <>Message has 6 different positions: "top" | "top-left" | "top-right" | "bottom-left" | "bottom" | "bottom-right"。</>,
  },
  [Close]: {
    title: 'Manual close',
    desc: (
      <>
        <code className="mx-code"> Message.remove(id)</code> can close the notification，
        <code className="mx-code"> Message.clearAll()</code>
        can close all the notification
      </>
    ),
  },
  [ShowClose]: {
    title: 'Closable',
    desc: (
      <>
        Set <code className="mx-code">closable</code> to show the close button
      </>
    ),
  },
};
