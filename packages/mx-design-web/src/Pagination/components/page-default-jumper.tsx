import React from 'react';
import { isUndefined } from '@mx-design/web-utils';
import { Input } from '../../Input';
import { useJumperStore } from '../store';
// type
import type { PageJumperProps } from '../store';

export function DefaultPageJumper(props: PageJumperProps) {
  const { locale, inputText, inputRef, prefixCls, handleChange, handleJump, totalPages, disabled } = useJumperStore(props, undefined);

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
