import React from 'react';
import { Basic, Controlled, DifferentTrigger, Disabled, Dynamic, FloatingLayer, Mount, Position, TriggerMode } from './constants';

export const en_us_popup = {
  [Basic]: {
    title: 'Basic',
    desc: (
      <>
        Consists of overlay content and trigger elements, both of which can be customized. Use <code className="mx-code">content</code>field
        to customize the floating layer content
      </>
    ),
  },
  [TriggerMode]: {
    title: 'Trigger elements',
    desc: (
      <>
        The trigger element can be customized using<code className="mx-code">triggerElement</code>
      </>
    ),
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
  [Position]: {
    title: 'Direction',
    desc: (
      <>
        Use placement to control the direction of the float, and if you want a float arrow, set
        <code className="mx-code">showArrow=true</code>
      </>
    ),
  },
  [FloatingLayer]: {
    title: 'Style and className',
    desc: (
      <div>
        <div>
          Overlay style can be controlled by <code className="mx-code">overlayClassName</code>、
          <code className="mx-code">overlayStyle</code>、<code className="mx-code"> overlayInnerStyle</code>
        </div>
        <div className="mt4">1、overlayClassName is used to define the overlay className</div>
        <div className="mt4">2、overlayStyle is used to define the style of the overlay</div>
        <div className="mt4">3、 overlayInnerStyle is used to define some styles of the content of the overlay layer</div>
      </div>
    ),
  },
  [Controlled]: {
    title: 'Controlled',
    desc: (
      <>
        You can freely control the display or hiding of the pop-up layer through<code className="mx-code">visible</code>
      </>
    ),
  },
  [Mount]: {
    title: 'Mount parent',
    desc: (
      <>
        The default parent node of the floating layer is body , you can freely adjust the mounted parent node element through{' '}
        <code className="mx-code">attach</code>
      </>
    ),
  },
  [Disabled]: {
    title: 'Disabled',
    desc: 'When the component is disabled, the pop-up layer will no longer be displayed',
  },
  [Dynamic]: {
    title: 'Dynamic Adaptive',
    desc: 'When the trigger or popup display content changes dynamically, adjust the position adaptively',
  },
};
