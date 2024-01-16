import { CSSProperties, useEffect, useRef, useState } from 'react';
import { isFunction, isObject } from '@mx-design/web-utils';
import { useComposition } from '../../hooks';
import { inputContentWidth } from '../constants';
import { getStyleFromInput } from '../utils';
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
    autoFitWidth,
    _needWrapper,
    rest,
  } = props;

  const { onBlur } = rest;
  // state
  const refInput = useRef<HTMLInputElement>();
  const refInputMirror = useRef<HTMLSpanElement>();
  const refPrevInputWidth = useRef<number>(null);

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
    onClear?.(e);
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

  const updateInputWidth = () => {
    if (refInputMirror.current && refInput.current) {
      const width = refInputMirror.current.offsetWidth;

      refInput.current.style.width = `${width + inputContentWidth}px`;
    }
  };

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

  const mirrorValue = inputProps.value || placeholder;
  const [inputComputeStyle, setInputComputeStyle] = useState<CSSProperties>();

  // Set the initial width of <input>, and subsequent updates are triggered by ResizeObserver
  useEffect(() => {
    if (autoFitWidth) {
      if (!isObject(autoFitWidth) || !autoFitWidth.pure) {
        setInputComputeStyle(getStyleFromInput(refInput?.current));
      }
      updateInputWidth();
    }
  }, [autoFitWidth]);

  return {
    inputProps,
    refInput,
    refInputMirror,
    refPrevInputWidth,
    handleClear,
    mirrorValue,
    inputComputeStyle,
    updateInputWidth,
  };
}
