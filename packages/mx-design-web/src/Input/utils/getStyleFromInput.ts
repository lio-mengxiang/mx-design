import { CSSProperties } from 'react';

export const getStyleFromInput = (input: HTMLElement): CSSProperties => {
  if (!input) {
    return {};
  }
  const computeStyle = window.getComputedStyle(input);

  const cssKeys = [
    'font',
    'letterSpacing',
    'overflow',
    'tabSize',
    'textIndent',
    'textTransform',
    'whiteSpace',
    'wordBreak',
    'wordSpacing',
    'paddingLeft',
    'paddingRight',
    'borderLeft',
    'borderRight',
    'boxSizing',
  ];

  return cssKeys.reduce((t, n) => {
    t[n] = computeStyle[n];
    return t;
  }, {});
};
