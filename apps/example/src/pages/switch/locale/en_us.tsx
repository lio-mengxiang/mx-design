import React from 'react';
import { Basic, Disabled, Icon, Loading, Text, Size } from './constants';

export const en_us_switch = {
  [Basic]: {
    title: 'Basic',
    desc: <>The most basic usage</>,
  },
  [Disabled]: {
    title: 'Disabled',
    desc: (
      <>
        Set Switch to be disabled by <code className="mx-code">disabled</code>.
      </>
    ),
  },
  [Icon]: {
    title: 'Icon',
    desc: <>Customize the icon displayed on the switch button</>,
  },
  [Text]: {
    title: 'Customize text',
    desc: <>Customize the text or icon to be displayed when the switch is turned on (off)</>,
  },

  [Loading]: {
    title: 'Loading',
    desc: <>The Switch is in the loading state and cannot be clicked</>,
  },
  [Size]: {
    title: 'Size',
    desc: <>You can get switches of different sizes by specifying css variable</>,
  },
};
