import React from 'react';
import { cs, isUndefined } from '@mx-design/web-utils';

export function SuffixElement(props) {
  const { trueMaxLength, prefixCls, suffix, showWordLimit, valueLength, hasLengthError } = props;

  if (!isUndefined(trueMaxLength) && showWordLimit) {
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

  return suffix;
}
