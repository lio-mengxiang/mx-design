import React, { useEffect, useRef, useState } from 'react';
import { useMergeValue } from '@mx-design/hooks';
import { formatValue, isLengthExceeds } from '../utils';
import { SuffixElement } from '../components/suffixElement';

// types
import type { InputComponentProps, RefInputType } from '../interface';

export function useInputStore(props: InputComponentProps) {
  const { maxLength, prefixCls, suffix, showWordLimit, addBefore, addAfter, prefix, _getInputValueRef } = props;
  const trueMaxLength = maxLength?.length;
  const mergedMaxLength = maxLength?.errorOnly ? undefined : trueMaxLength;

  const [focus, setFocus] = useState(false);
  const inputRef = useRef<RefInputType>();
  const inputWrapperRef = useRef();

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

  useEffect(() => {
    // eslint-disable-next-line no-prototype-builtins
    if (_getInputValueRef?.hasOwnProperty('current')) {
      _getInputValueRef.current = value;
    }
  }, [value]);

  const isCustomHeight = 'height' in props;

  const valueLength = value.length;

  const hasLengthError = isLengthExceeds({ mergedMaxLength, valueLength, trueMaxLength });

  const suffixElement = (
    <SuffixElement
      trueMaxLength={trueMaxLength}
      prefixCls={prefixCls}
      suffix={suffix}
      showWordLimit={showWordLimit}
      valueLength={valueLength}
      hasLengthError={hasLengthError}
    />
  );
  const status = props.status || (hasLengthError ? 'error' : undefined);
  const needWrapper = addBefore || addAfter || suffixElement || prefix;

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
    hasLengthError,
    value,
  };
}
