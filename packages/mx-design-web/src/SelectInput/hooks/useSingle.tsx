import React, { useRef, MouseEvent } from 'react';
import { useMergeValue } from '@mx-design/hooks';
import { Input } from '../../Input';
import { IconLoading } from '../../Icon';
import type { SelectInputProps } from '../interface';
import type { InputProps } from '../../Input';

export function useSingle(
  props: Pick<SelectInputProps, 'value' | 'loading' | 'inputProps' | 'inputValue' | 'defaultInputValue' | 'disabled'> & { visible: boolean }
) {
  const { value, loading, inputProps, inputValue: controlledInputValue, defaultInputValue, disabled, visible } = props;
  const { suffix, onClear, placeholder, customSlot, onFocus, onPressEnter, status, readOnly = true } = inputProps;

  const inputRef = useRef();
  const [inputValue, setInputValue] = useMergeValue('', {
    value: controlledInputValue,
    defaultValue: defaultInputValue,
  });

  const onInnerClear = (e: MouseEvent<SVGSVGElement>) => {
    onClear?.(e);
    setInputValue('');
  };

  const onInnerInputChange: InputProps['onChange'] = (value) => {
    if (readOnly || disabled) return;
    setInputValue(value);
  };

  const renderSelect = () => {
    const displayedValue = visible && !readOnly ? inputValue : value;

    return (
      <Input
        ref={inputRef}
        disabled={disabled}
        readOnly={readOnly}
        status={status}
        placeholder={customSlot ? '' : placeholder}
        value={customSlot ? ' ' : (displayedValue as string)}
        customSlot
        onFocus={(e) => {
          onFocus?.(value, { e });
        }}
        onPressEnter={(e) => {
          onPressEnter?.(value, { e });
        }}
        {...inputProps}
        onChange={onInnerInputChange}
        onClear={onInnerClear}
        suffix={loading ? <IconLoading spin /> : suffix}
        _needWrapper
      />
    );
  };

  return {
    inputRef,
    renderSelect,
  };
}
