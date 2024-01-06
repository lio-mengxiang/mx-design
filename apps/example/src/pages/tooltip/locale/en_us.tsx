import React from 'react';
import { Basic, DifferentTrigger, FloatingLayer, Position } from './constants';

export const en_us_tooltip = {
  [Basic]: {
    title: 'Basic',
    desc: '',
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
    title: 'Position',
    desc: 'Use placement property to set different position',
  },
  [FloatingLayer]: {
    title: 'Style and className',
    desc: (
      <div>
        You can use the <code className="mx-code">overlayInnerStyle</code> property to set different colors
      </div>
    ),
  },
};
