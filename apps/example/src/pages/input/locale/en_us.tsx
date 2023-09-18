import React from 'react';
import { Basic, Status, Label, Suffix, Search, Limit, Password, Normalize } from './constants';

export const en_us_input = {
  [Basic]: {
    title: 'Basic',
    desc: 'Basic usage of tags',
  },
  [Status]: {
    title: 'Status',
    desc: 'Different Input status',
  },
  [Label]: {
    title: 'Front and Post Label',
    desc: (
      <>
        Specify <code className="mx-code">addBefore</code>/<code className="mx-code">addAfter</code> to add elements before/after the input
        box
      </>
    ),
  },
  [Suffix]: {
    title: 'Prefix and Suffix',
    desc: (
      <>
        Add a prefix/suffix in the input box by specifying <code className="mx-code">prefix or suffix</code>
      </>
    ),
  },
  [Search]: {
    title: 'Search Box',
    desc: <>Input box with search button for content retrieval</>,
  },
  [Limit]: {
    title: 'Length Limit',
    desc: (
      <>
        Set <code className="mx-code">maxLength.length</code> to limit the maximum number of words, and use
        <code className="mx-code">showWordLimit</code> to display word count statistics. Setting
        <code className="mx-code">maxLength.errorOnly</code> will not limit the number of words entered by the user, but if the maximum
        number of words is exceeded, an error status will be displayed. It is not working that if showWordLimit is configured, if you use
        suffix
      </>
    ),
  },
  [Password]: {
    title: 'Password',
    desc: 'Used for password input',
  },
  [Normalize]: {
    title: 'Normalize Value',
    desc: 'Format the value entered by the user at the specified time, and when the previous and subsequent values are inconsistent, onChange will be triggered',
  },
};
