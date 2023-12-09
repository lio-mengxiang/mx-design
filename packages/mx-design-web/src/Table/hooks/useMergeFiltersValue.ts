import React, { useState } from 'react';
import { isEmptyObject, noop } from '@mx-design/web-utils';

export function useMergeFiltersValue<T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T;
    value?: T;
    isControlledFilter?: boolean;
  }
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const { defaultValue, value, isControlledFilter } = props || {};

  const [stateValue, setStateValue] = useState<T>(
    // eslint-disable-next-line no-nested-ternary
    !isEmptyObject(value) && isControlledFilter ? value : !isEmptyObject(defaultValue) ? defaultValue : defaultStateValue
  );

  const mergedValue = isEmptyObject(value) && !isControlledFilter ? stateValue : value;
  const mergedSetStateValue = isEmptyObject(value) && !isControlledFilter ? setStateValue : noop;

  return [mergedValue, mergedSetStateValue];
}
