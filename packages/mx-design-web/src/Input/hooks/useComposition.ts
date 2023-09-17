import { ChangeEventHandler, CompositionEventHandler, KeyboardEventHandler, useRef, useState } from 'react';
import { InputProps, TextAreaProps } from '../interface';

interface useCompositionProps {
  value: string;
  maxLength: number;
  onChange: InputProps['onChange'];
  onKeyDown: InputProps['onKeyDown'] | TextAreaProps['onKeyDown'];
  onPressEnter: InputProps['onPressEnter'];
  normalizeHandler?: (type: InputProps['normalizeTrigger'][number]) => InputProps['normalize'];
}

/**
 * Handle input text like Chinese
 * chrome： compositionstart -> onChange -> compositionend
 * other browser: compositionstart -> compositionend -> onChange
 */
export function useComposition({ value, maxLength, onChange, onKeyDown, onPressEnter, normalizeHandler }: useCompositionProps): {
  compositionValue: string;
  triggerValueChange: typeof onChange;
  handleCompositionStart: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleCompositionEnd: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleValueChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleKeyDown: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
} {
  const refIsComposition = useRef(false);
  const [compositionValue, setCompositionValue] = useState('');

  const triggerValueChange: typeof onChange = (newValue, e) => {
    if (
      onChange &&
      // Prevents onchange from being triggered twice
      newValue !== value &&
      (maxLength === undefined || newValue.length <= maxLength)
    ) {
      onChange(newValue, e);
    }
  };

  return {
    compositionValue,
    triggerValueChange,
    handleCompositionStart: (e: any) => {
      refIsComposition.current = true;
    },
    handleCompositionEnd: (e: any) => {
      refIsComposition.current = false;
      setCompositionValue(undefined);
      triggerValueChange(e.target.value, e);
    },
    handleValueChange: (e: any) => {
      const newValue = e.target.value;
      if (!refIsComposition.current) {
        // if e.type is compositionend event, the following content will trigger
        compositionValue && setCompositionValue(undefined);
        triggerValueChange(newValue, e);
      } else {
        setCompositionValue(newValue);
      }
    },
    handleKeyDown: (e: any) => {
      const keyCode = e.key;
      if (!refIsComposition.current) {
        onKeyDown?.(e);
        if (keyCode === 'Enter') {
          onPressEnter?.(e);
          normalizeHandler && triggerValueChange(normalizeHandler('onPressEnter')(e.target.value), e);
        }
      }
    },
  };
}
