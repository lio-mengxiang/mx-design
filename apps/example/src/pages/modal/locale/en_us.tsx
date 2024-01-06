/* eslint-disable quotes */
import React from 'react';
import { Basic, Async, Footer, Feedback, Update, Position } from './constants';

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
  [Feedback]: {
    title: 'Message Modal Dialog',
    desc: (
      <>
        There are four types of message modal dialog: <code className="mx-code">info</code>, <code className="mx-code">success</code>,
        <code className="mx-code">warning</code>,<code className="mx-code">error</code>
        Only a button is provided to close message modal dialog
      </>
    ),
  },
  [Position]: {
    title: 'Customize Position',
    desc: (
      <>
        Use css local variables to customize the distance from the top of the viewport, using the method
        <code className="mx-code">{"themeStyle: { '--modal-top': 'xx distance' }"}</code>, If you want to center, you need to use
        <code className="mx-code">calc(50% - modal half the height)</code>
      </>
    ),
  },
  [Update]: {
    title: 'Update and Close',
    desc: (
      <>
        Manually update and close the dialog which created by
        <code className="mx-code">Modal</code>
      </>
    ),
  },
};
