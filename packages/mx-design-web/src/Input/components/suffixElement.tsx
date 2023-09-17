import React from 'react';
import { cs } from '@mx-design/web-utils';

export function SuffixElement(props) {
  const { trueMaxLength, prefixCls, suffix, showWordLimit, valueLength, hasLengthError } = props;

  if (trueMaxLength && showWordLimit) {
    const [leftWord, rightWord] = [valueLength, trueMaxLength];
    return (
      <span
        className={cs(`${prefixCls}-word-limit`, {
          [`${prefixCls}-word-limit-error`]: hasLengthError,
        })}
      >
        {leftWord}/{rightWord}
      </span>
    );
  }

  return suffix;
}
