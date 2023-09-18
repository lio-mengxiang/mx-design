import { useRef } from 'react';
import { isFunction } from '@mx-design/web-utils';
import { useComposition } from '../hooks';
// types
import type { InputComponentProps, InputProps } from '../interface';

export function useInputElementStore(props: InputComponentProps & { rest: Record<string, any> }) {
  const {
    placeholder,
    disabled,
    value,
    readOnly,
    onChange,
    onKeyDown,
    onPressEnter,
    maxLength: propMaxLength,
    normalizeTrigger,
    onClear,
    rest,
  } = props;

  const { onBlur } = rest;
  // state
  const refInput = useRef<HTMLInputElement>();

  const maxLength = propMaxLength?.errorOnly ? undefined : propMaxLength?.length;

  // function
  const normalizeHandler = function (type: InputProps['normalizeTrigger'][number]) {
    if (Array.isArray(normalizeTrigger) && normalizeTrigger.indexOf(type) > -1 && isFunction(props.normalize)) {
      return props.normalize;
    }
    return (v) => v;
  };

  const handleClear = function (e) {
    if (refInput.current?.focus) {
      refInput.current.focus();
    }
    triggerValueChange('', e);
    onClear?.();
  };

  const { compositionValue, triggerValueChange, handleCompositionStart, handleCompositionEnd, handleValueChange, handleKeyDown } =
    useComposition({
      value,
      maxLength,
      onChange,
      onKeyDown,
      onPressEnter,
      normalizeHandler,
    });

  // state
  const inputProps = {
    ...rest,
    readOnly,
    maxLength,
    disabled,
    placeholder,
    value: compositionValue || value || '',
    onKeyDown: handleKeyDown,
    onChange: handleValueChange,
    onCompositionStart: handleCompositionStart,
    onCompositionEnd: handleCompositionEnd,
    onBlur: (e) => {
      onBlur?.(e);
      triggerValueChange(normalizeHandler('onBlur')(e.target.value), e);
    },
  };

  return {
    inputProps,
    refInput,
    triggerValueChange,
    handleClear,
  };
}
