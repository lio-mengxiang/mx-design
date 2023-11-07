import React from 'react';
import { Basic, PageJumper, BufferSize, Total, Size, Step } from './constants';

export const en_us_pagination = {
  [Basic]: {
    title: 'Basic',
    desc: 'A simple usage',
  },
  [PageJumper]: {
    title: 'PageJumper',
    desc: <>Input the page number to jump to the specified page</>,
  },
  [Size]: {
    title: 'Size',
    desc: (
      <>
        Pass css variable by <code className="mx-code">themeStyle</code> field to set size
      </>
    ),
  },
  [Total]: {
    title: 'Show total',
    desc: (
      <>
        Set <code className="mx-code">showTotal</code> to show the total number of data
      </>
    ),
  },
  [Step]: {
    title: 'Previous and next',
    desc: (
      <>
        Set the <code className="mx-code">itemRender</code> to customize the pagination buttons
      </>
    ),
  },
  [BufferSize]: {
    title: 'Display length when page numbers are omitted',
    desc: (
      <>
        With <code className="mx-code">bufferSize</code> you can set the number of pages between the current page and .... An ... means at
        least 2 pages are omitted
      </>
    ),
  },
};
