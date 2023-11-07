import React, { useRef, useState } from 'react';
import { isUndefined } from '@mx-design/web-utils';
import { PAGINATION_NAMESPACE } from '../constants';
import { useLocale } from '../../Locale/useLocal/useLocal';
import { Input, RefInputType } from '../../Input';
import { limitPageRange } from '../utils';

export interface PageJumperProps {
  disabled?: boolean;
  rootPrefixCls?: string;
  totalPages: number;
  current: number;
  onPageChange?: (value) => void;
}

export function PageJumper(props: PageJumperProps) {
  const { rootPrefixCls, totalPages, disabled } = props;

  const [locale] = useLocale({ namespace: PAGINATION_NAMESPACE });
  const [inputText, setInputText] = useState<number>(undefined);
  const inputRef = useRef<RefInputType>();
  const prefixCls = `${rootPrefixCls}-jumper`;

  const handleChange = (val) => {
    const value = parseInt(val, 10);
    setInputText(Number.isNaN(value) ? undefined : value);
  };

  const handleJump = () => {
    const { onPageChange, totalPages, current } = props;

    if (isUndefined(inputText)) {
      return;
    }

    if (inputText === current) {
      setInputText(undefined);
      return;
    }

    const page = limitPageRange(Number.isNaN(Number(inputText)) ? current : Number(inputText), totalPages);

    setInputText(undefined);
    onPageChange?.(page);
  };

  return (
    <div className={prefixCls}>
      <span className={`${prefixCls}-text-goto`}>{locale.goto}</span>
      <Input
        ref={inputRef}
        className={`${prefixCls}-input`}
        value={!isUndefined(inputText) ? inputText.toString() : undefined}
        disabled={disabled || !totalPages}
        onChange={handleChange}
        onPressEnter={handleJump}
        onBlur={handleJump}
      />
      <span className={`${prefixCls}-text-goto-suffix`}>{locale.page}</span>
    </div>
  );
}
