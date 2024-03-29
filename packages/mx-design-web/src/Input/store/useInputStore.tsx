import React, { useEffect, useRef, useState } from 'react';
import { useMergeValue } from '@mx-design/hooks';
import { isUndefined } from '@mx-design/web-utils';
import { formatValue, isLengthExceeds } from '../utils';
import { SuffixElement } from '../components/suffixElement';
// types
import type { InputComponentProps, RefInputType } from '../interface';

export function useInputStore(props: InputComponentProps) {
  const { maxLength, prefixCls, suffix, showWordLimit, addBefore, addAfter, prefix, _needWrapper } = props;
  const trueMaxLength = maxLength?.length;
  const mergedMaxLength = maxLength?.errorOnly ? undefined : trueMaxLength;

  const [focus, setFocus] = useState(false);
  const inputRef = useRef<RefInputType>();
  const inputWrapperRef = useRef();
  const wrapperRef = useRef();
  const [value, setValue] = useMergeValue('', {
    defaultValue: 'defaultValue' in props ? formatValue(props.defaultValue, mergedMaxLength) : undefined,
    value: 'value' in props ? formatValue(props.value, mergedMaxLength) : undefined,
  });

  const onChange = (value, e) => {
    if (!('value' in props)) {
      setValue(value);
    }
    props.onChange?.(value, e);
  };

  const isCustomHeight = 'height' in props;

  const valueLength = value.length;

  const hasLengthError = isLengthExceeds({ mergedMaxLength, valueLength, trueMaxLength });

  let suffixElement = suffix;
  if (!isUndefined(trueMaxLength) && showWordLimit) {
    suffixElement = (
      <SuffixElement
        trueMaxLength={trueMaxLength}
        prefixCls={prefixCls}
        suffix={suffix}
        showWordLimit={showWordLimit}
        valueLength={valueLength}
        hasLengthError={hasLengthError}
      />
    );
  }

  const status = props.status || (hasLengthError ? 'error' : undefined);
  const needWrapper = !!addBefore || !!addAfter || !!suffixElement || !!prefix || !!_needWrapper;

  return {
    needWrapper,
    status,
    onChange,
    suffixElement,
    isCustomHeight,
    setFocus,
    focus,
    inputRef,
    inputWrapperRef,
    wrapperRef,
    hasLengthError,
    value,
    mergedMaxLength,
  };
}
