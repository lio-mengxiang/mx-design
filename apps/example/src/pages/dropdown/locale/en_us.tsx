import React from 'react';
import { Basic, Position, Disabled, DifferentTrigger, GetDisabledStatus, ItemStyle } from './constants';

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
  [GetDisabledStatus]: {
    title: 'The child component gets the disabled and visible states',
    desc: (
      <div>
        Firstly, child component need to be wrapped by <code className="mx-code">React.forwardRef</code> and be passed{' '}
        <code className="mx-code">ref</code>.Then child component's<code className="mx-code">props</code>
        include <code className="mx-code">disabled</code>
        param that represent disabled status for and <code className="mx-code">visible</code>
        param that represent if dropdown is show, finally we should pass some event <code className="mx-code">props</code> in the props to
        child component
      </div>
    ),
  },
  [ItemStyle]: {
    title: 'Custom style',
    desc: (
      <>
        Passing <code className="mx-code">style</code> property to custom style
      </>
    ),
  },
};
