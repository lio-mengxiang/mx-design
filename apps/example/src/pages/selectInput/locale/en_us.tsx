import React from 'react';
import { Basic, PrefixSuffix, Status } from './constants';

export const en_us_select_input = {
  [Basic]: {
    title: 'Basic',
    desc: 'Basic usage of tags',
  },
  [PrefixSuffix]: {
    title: 'Prefix-Suffix',
    desc: (
      <div>
        <li style={{ lineHeight: '32px' }}>
          Use <code className="mx-code">addBefore</code> to customize the prefix content
        </li>
        <li style={{ lineHeight: '32px' }}>
          Use <code className="mx-code">addAfter</code> to customize the postfix content
        </li>
        <li style={{ lineHeight: '32px' }}>
          The front icon is customized by using <code className="mx-code">prefix</code>
        </li>
        <li style={{ lineHeight: '32px' }}>
          Use <code className="mx-code">suffix</code> to customize the rear icon
        </li>
      </div>
    ),
  },
  [Status]: {
    title: 'Closable',
    desc: (
      <>
        Buttons can be in <code className="mx-code">brand</code>，<code className="mx-code">warning</code>，
        <code className="mx-code">error</code>,<code className="mx-code">success</code> and <code className="mx-code">default(gray)</code>
        status. Status can co-exist with type but with higher priority
      </>
    ),
  },
};
