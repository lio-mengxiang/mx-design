import { useEffect, useRef, useState } from 'react';
import { isObject, isUndefined } from '@mx-design/web-utils';
import { PAGINATION_NAMESPACE } from '../constants';
import { useLocale } from '../../Locale/useLocal/useLocal';
import { RefInputType } from '../../Input';
import { limitPageRange } from '../utils';

export interface PageJumperProps {
  disabled?: boolean;
  rootPrefixCls?: string;
  totalPages: number;
  current: number;
  onPageChange?: (value) => void;
  simple?: boolean | { showJumper?: boolean };
}

export function useJumperStore(props: PageJumperProps, initInputText: number | undefined) {
  const { rootPrefixCls, totalPages, disabled, simple, current } = props;

  const [locale] = useLocale({ namespace: PAGINATION_NAMESPACE });
  const [inputText, setInputText] = useState(initInputText);
  const inputRef = useRef<RefInputType>();
  const prefixCls = `${rootPrefixCls}-jumper`;

  useEffect(() => {
    if (simple) {
      setInputText(current);
    }
  }, [simple, current]);

  const handleChange = (val) => {
    const value = parseInt(val, 10);
    setInputText(Number.isNaN(value) ? undefined : value);
  };

  const handleJump = () => {
    const { onPageChange, totalPages, current } = props;

    if (isUndefined(inputText)) {
      return;
    }

    if (inputText === current && !simple) {
      setInputText(undefined);
      return;
    }

    const page = limitPageRange(Number.isNaN(Number(inputText)) ? current : Number(inputText), totalPages);

    setInputText(simple ? page : undefined);
    onPageChange?.(page);
  };

  const onFocus = () => {
    const input = inputRef.current.inputDom;
    if (String(inputText) && input) {
      input.setSelectionRange(0, String(inputText).length);
    }
  };

  const inputConfig = { showJumper: true, ...(isObject(simple) ? simple : {}) };

  return {
    locale,
    inputText,
    inputRef,
    prefixCls,
    handleChange,
    handleJump,
    totalPages,
    disabled,
    onFocus,
    inputConfig,
    simple,
  };
}
