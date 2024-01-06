import { Basic, Container } from './constants';
import React from 'react';

export const en_us_affix = {
  [Basic]: {
    title: 'Basic Affix',
    desc: (
      <>
        Suitable for scenes with simple page, the default container is <code className="mx-code">body</code>
      </>
    ),
  },
  [Container]: {
    title: 'Specifies the container',
    desc: 'Fixed elements relative to a specific container',
  },
};
