import React, { useRef } from 'react';
import { useMergeValue } from '@mx-design/hooks';
import { InputTag, InputTagHandle, ValueChangeReason } from '../../InputTag';
import { SelectInputProps, TagInputValue } from '../interface';

export default function useMultiple(
  props: Pick<SelectInputProps, 'value' | 'inputTagProps' | 'inputValue' | 'defaultInputValue' | 'onPopupVisibleChange' | 'disabled'> & {
    visible: boolean;
  }
) {
  const { value, inputTagProps, inputValue: controlledInputValue, defaultInputValue, disabled, visible } = props;

  const { onChange, readOnly, onClear, status, onPressEnter } = inputTagProps;
  const tagInputRef = useRef<InputTagHandle>();

  const [inputValue, setInputValue] = useMergeValue('', {
    value: controlledInputValue,
    defaultValue: defaultInputValue,
  });

  const onTagInputChange = (val: TagInputValue, reason: ValueChangeReason) => {
    // 避免触发浮层的显示或隐藏
    // if (reason === 'remove') {
    //   context.e?.stopPropagation();
    // }
    onChange?.(val, reason);
  };

  const onInnerClear = () => {
    onClear?.();
    setInputValue('');
  };

  const renderSelect = () => {
    return (
      <InputTag
        ref={tagInputRef}
        disabled={!!disabled}
        readOnly={!!readOnly}
        status={status}
        value={value as any}
        inputValue={inputValue}
        {...inputTagProps}
        onChange={onTagInputChange}
        onInputChange={(val) => {
          setInputValue(val);
        }}
        onClear={onInnerClear}
      />
    );
  };

  return {
    tagInputRef,
    renderSelect,
  };
}
