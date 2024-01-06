import React from 'react';
import type { ObjectValueType, ValueChangeReason, InputTagProps } from '../interface';

interface ValueChangeProps {
  disabled: InputTagProps['disabled'];
  readOnly: InputTagProps['readOnly'];
  setValue: React.Dispatch<React.SetStateAction<ObjectValueType[]>>;
  value: ObjectValueType[];
  onChange: InputTagProps['onChange'];
  labelInValue: InputTagProps['labelInValue'];
  reason: ValueChangeReason;
}

export function valueChangeHandler({ disabled, readOnly, setValue, value, onChange, labelInValue, reason }: ValueChangeProps) {
  if (disabled || readOnly) return;
  setValue(value);
  onChange?.(labelInValue ? value : value.map((x) => x.value), reason);
}
