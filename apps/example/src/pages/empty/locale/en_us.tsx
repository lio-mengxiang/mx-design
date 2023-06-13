import React from 'react';
import { Basic, CustomIcon, CustomPic } from './constants';

export const en_us_empty = {
  [Basic]: {
    title: 'Basic',
    desc: 'Basic usage of Empty component',
  },
  [CustomIcon]: {
    title: 'Customize Icon and Description',
    desc: (
      <>
        You can pass in custom icons through the <code className="mx-code">icon</code> parameter, and
        <code className="mx-code">description</code>to modify the description
      </>
    ),
  },
  [CustomPic]: {
    title: 'Customize Image',
    desc: (
      <>
        You can pass in the image URL through the <code className="mx-code">imgSrc</code> parameter
      </>
    ),
  },
};
