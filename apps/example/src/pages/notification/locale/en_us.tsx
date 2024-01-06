import React from 'react';
import { Basic, Different, Update, Position, CustomBtn, CustomIcon, CustomStyle } from './constants';

export const en_us_notification = {
  [Basic]: {
    title: 'Basic',
    desc: 'The simplest usage',
  },
  [Different]: {
    title: 'Type',
    desc: (
      <>
        There are 5 different types of Notification, <code className="mx-code">info</code>,<code className="mx-code">success</code> ,
        <code className="mx-code">warning</code> , <code className="mx-code">error</code>, <code className="mx-code">loading</code>
      </>
    ),
  },
  [Update]: {
    title: 'Update',
    desc: 'By specifying the id, the existing notification can be updated',
  },
  [CustomBtn]: {
    title: 'Custom action buttons',
    desc: (
      <>
        ou can add operation buttons by specifying the <code className="mx-code">btn</code> field
      </>
    ),
  },
  [CustomIcon]: {
    title: 'Customize icon',
    desc: (
      <>
        Set <code className="mx-code">icon</code> to customize the icon
      </>
    ),
  },
  [CustomStyle]: {
    title: 'Customize style',
    desc: (
      <>
        You can set <code className="mx-code">style</code> and <code className="mx-code">className</code> to customize the style
      </>
    ),
  },
  [Position]: {
    title: 'Position',
    desc: <>Notification has 6 different positions: "top" | "top-left" | "top-right" | "bottom-left" | "bottom" | "bottom-right"。</>,
  },
};
