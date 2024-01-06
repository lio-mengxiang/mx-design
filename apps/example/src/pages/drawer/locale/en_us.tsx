/* eslint-disable quotes */
import React from 'react';
import { Basic, CustomizedElement, Mount, MultiLayer, Update, Position } from './constants';

export const en_us_drawer = {
  [Basic]: {
    title: 'Basic',
    desc: 'Basic usage of Drawer. Click the trigger button to slide out the drawer from the right, click the mask area to close',
  },
  [Position]: {
    title: 'Customize Position',
    desc: (
      <>
        Use <code className="mx-code">placement</code> to customize the position where the drawer will slide out from
      </>
    ),
  },
  [CustomizedElement]: {
    title: 'Custom node',
    desc: (
      <>
        he content can be customized through <code className="mx-code">title</code> and <code className="mx-code">footer</code>. When set to
        null, the corresponding dom node won't be rendered.
      </>
    ),
  },
  [MultiLayer]: {
    title: 'Nested drawer',
    desc: 'Nested drawer',
  },
  [Mount]: {
    title: 'Popup Container',
    desc: (
      <>
        Use <code className="mx-code">getMountContainer</code> to specify the parent node where the drawer should mount to
      </>
    ),
  },
  // [Update]: {
  //   title: 'Update and Close',
  //   desc: (
  //     <>
  //       Manually update and close the dialog which created by
  //       <code className="mx-code">Modal</code>
  //     </>
  //   ),
  // },
};
