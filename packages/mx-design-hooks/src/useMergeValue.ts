import React, { useState } from 'react';
import { isUndefined, noop } from '@mx-design/web-utils';

export function useMergeValue<T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T;
    value?: T;
  }
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const { defaultValue, value } = props || {};

  const [stateValue, setStateValue] = useState<T>(
    // eslint-disable-next-line no-nested-ternary
    !isUndefined(value) ? value : !isUndefined(defaultValue) ? defaultValue : defaultStateValue
  );

  const mergedValue = isUndefined(value) ? stateValue : value;
  const mergedSetStateValue = isUndefined(value) ? setStateValue : noop;

  return [mergedValue, mergedSetStateValue];
}
