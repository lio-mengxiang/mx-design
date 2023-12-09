import React from 'react';
import { babelTransform } from './transform';
import { compose } from './compose';
import { evalCode } from './evalCode';
import errorBoundary from './errorBoundary';
// type
import type { CodePreviewProps } from '../interface';

interface executeCodeProps {
  input: string;
  dependencies: CodePreviewProps['dependencies'];
  errorCallback: (error: Error) => void;
}

const replaceUseStrict = (code: string) => code.replace('"use strict";', '');
const trimCode = (code: string) => code.trim().replace(/;$/, '');
const wrapReturn = (code: string) => `${code}; return App`;

export const generateElement = ({ input, dependencies, errorCallback }: executeCodeProps) => {
  const transformed = compose<string>(wrapReturn, replaceUseStrict, trimCode, babelTransform, trimCode)(input);

  return errorBoundary(evalCode(transformed, { React, ...dependencies }), errorCallback);
};
