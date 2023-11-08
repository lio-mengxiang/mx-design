import React from 'react';
import { cs } from '@mx-design/web-utils';

export function SuffixElement(props) {
  const { trueMaxLength, prefixCls, valueLength, hasLengthError } = props;

  return (
    <span
      className={cs(`${prefixCls}-word-limit`, {
        [`${prefixCls}-word-limit-error`]: hasLengthError,
      })}
    >
      {valueLength}/{trueMaxLength}
    </span>
  );
}
