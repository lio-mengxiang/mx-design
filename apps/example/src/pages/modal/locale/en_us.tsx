import React from 'react';
import { Basic, Async, Footer, Update, Close, Position, ShowClose } from './constants';

export const en_us_modal = {
  [Basic]: {
    title: 'Basic',
    desc: 'The simplest usage',
  },
  [Async]: {
    title: 'Async Close',
    desc: <>When using a form in a dialog, such as submitting a form, click OK to close the dialog asynchronously. ,</>,
  },
  [Footer]: {
    title: 'Customize Footer',
    desc: (
      <>
        Pass in okButtonProps and cancelButtonProps to customize the props of the OK button and the cancel button respectively. If
        okButtonProps and cancelButtonProps still cannot meet your needs, you can directly pass in footer to customize the footer content.
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
