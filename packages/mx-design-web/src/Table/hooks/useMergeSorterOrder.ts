import React, { useState } from 'react';
import { noop, isEmptyArray } from '@mx-design/web-utils';

export function useMergeSorterOrder<T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T;
    value?: T;
    isControlledSort?: boolean;
  }
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const { defaultValue, value, isControlledSort } = props || {};

  const [stateValue, setStateValue] = useState<T>(
    // eslint-disable-next-line no-nested-ternary
    !isEmptyArray(value) && !isControlledSort ? value : !isEmptyArray(defaultValue) ? defaultValue : defaultStateValue
  );

  const mergedValue = isEmptyArray(value) && !isControlledSort ? stateValue : value;

  const mergedSetStateValue = isEmptyArray(value) && !isControlledSort ? setStateValue : noop;

  return [mergedValue, mergedSetStateValue];
}
