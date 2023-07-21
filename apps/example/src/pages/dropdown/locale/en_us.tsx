import React from 'react';
import { Basic, Position, Disabled, DifferentTrigger } from './constants';

export const en_us_dropdown = {
  [Basic]: {
    title: 'Basic',
    desc: 'Basic usage of Dropdown',
  },
  [Position]: {
    title: 'Direction',
    desc: (
      <>
        Twelve popup placement are available:
        <code className="mx-code">left</code>,<code className="mx-code">left-start</code>，<code className="mx-code">left-end</code>，
        <code className="mx-code">right</code>,<code className="mx-code">right-start</code>,<code className="mx-code">right-end</code>,
        <code className="mx-code">bottom</code>,<code className="mx-code">top</code>,<code className="mx-code">top-start</code>,
        <code className="mx-code">top-end</code>,<code className="mx-code">bottom-start</code>,<code className="mx-code">bottom-end</code>
      </>
    ),
  },
  [Disabled]: {
    title: 'Disabled and Dividing lines',
    desc: <>Disable items and insert dividing lines</>,
  },
  [DifferentTrigger]: {
    title: 'Different triggers',
    desc: (
      <>
        Provides<code className="mx-code">hover trigger (default)</code>、<code className="mx-code">click trigger</code>、
        <code className="mx-code">get focus trigger</code>、<code className="mx-code">right click trigger</code>, etc
      </>
    ),
  },
  // [FloatingLayer]: {
  //   title: 'Style and className',
  //   desc: (
  //     <div>
  //       <div>
  //         Overlay style can be controlled by <code className="mx-code">overlayClassName</code>、
  //         <code className="mx-code">overlayStyle</code>、<code className="mx-code"> overlayInnerStyle</code>
  //       </div>
  //       <div className="mt4">1、overlayClassName is used to define the overlay className</div>
  //       <div className="mt4">2、overlayStyle is used to define the style of the overlay</div>
  //       <div className="mt4">3、 overlayInnerStyle is used to define some styles of the content of the overlay layer</div>
  //     </div>
  //   ),
  // },
  // [Controlled]: {
  //   title: 'Controlled',
  //   desc: (
  //     <>
  //       You can freely control the display or hiding of the pop-up layer through<code className="mx-code">visible</code>
  //     </>
  //   ),
  // },
  // [Mount]: {
  //   title: 'Mount parent',
  //   desc: (
  //     <>
  //       The default parent node of the floating layer is body , you can freely adjust the mounted parent node element through{' '}
  //       <code className="mx-code">attach</code>
  //     </>
  //   ),
  // },
  // [Disabled]: {
  //   title: 'Disabled',
  //   desc: 'When the component is disabled, the pop-up layer will no longer be displayed',
  // },
  // [Dynamic]: {
  //   title: 'Dynamic Adaptive',
  //   desc: 'When the trigger or popup display content changes dynamically, adjust the position adaptively',
  // },
};
