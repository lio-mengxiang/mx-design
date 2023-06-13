import React from 'react';
import { babelTransform } from './transform';
import type { CodePreviewProps } from '../interface';
import { compose } from './compose';
import { evalCode } from './evalCode';
import errorBoundary from './errorBoundary';

interface executeCodeProps {
  input: string;
  dependencies: CodePreviewProps['dependencies'];
  errorCallback: (error: Error) => void;
}

const replaceUseStrict = (code: string) => code.replace('"use strict";', '');
const trimCode = (code: string) => code.trim().replace(/;$/, '');
const wrapReturn = (code: string) => `return (${code})`;

export const generateElement = ({ input, dependencies, errorCallback }: executeCodeProps) => {
  const transformed = compose<string>(wrapReturn, replaceUseStrict, trimCode, babelTransform, trimCode)(input);

  return errorBoundary(evalCode(transformed, { React, ...dependencies }), errorCallback);
};
