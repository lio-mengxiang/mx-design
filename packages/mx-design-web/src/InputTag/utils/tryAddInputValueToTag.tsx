import React from 'react';
import { isFunction } from '@mx-design/web-utils';
import { ADD } from '../constants';
import { valueChangeHandler } from './valueChangeHandler';
import type { InputTagProps, ObjectValueType } from '../interface';

interface TryAddInputValueToTagProps {
  validate: InputTagProps['validate'];
  inputValue: string;
  value: ObjectValueType[];
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  disabled: InputTagProps['disabled'];
  readOnly: InputTagProps['readOnly'];
  setValue: React.Dispatch<React.SetStateAction<ObjectValueType[]>>;
  onChange: InputTagProps['onChange'];
  labelInValue: InputTagProps['labelInValue'];
}

export async function tryAddInputValueToTag({
  validate,
  inputValue,
  value,
  setInputValue,
  disabled,
  readOnly,
  setValue,
  onChange,
  labelInValue,
}: TryAddInputValueToTagProps) {
  try {
    const validateResult = isFunction(validate) ? await validate(inputValue, value) : true;
    if (validateResult) {
      valueChangeHandler({
        disabled,
        readOnly,
        setValue,
        value: value.concat({
          value: validateResult === true ? inputValue : validateResult,
          label: inputValue,
        }),
        onChange,
        labelInValue,
        reason: ADD,
      });
      setInputValue('');
    }
  } catch (error) {
    console?.error(error);
  }
}
