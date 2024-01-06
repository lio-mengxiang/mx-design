import { basic } from './basic';
import { prefixSuffix } from './prefix-suffix';
import { labelInValue } from './label-in-value';
import { validateFormat } from './validate-format';
import { saveOnBlur } from './save-on-blur';
import { renderTag } from './render-tag';
import { tokenSeparator } from './token-separator';

export const exampleList = {
  [basic.namespace]: basic,
  [prefixSuffix.namespace]: prefixSuffix,
  [labelInValue.namespace]: labelInValue,
  [validateFormat.namespace]: validateFormat,
  [saveOnBlur.namespace]: saveOnBlur,
  [renderTag.namespace]: renderTag,
  [tokenSeparator.namespace]: tokenSeparator,
};
