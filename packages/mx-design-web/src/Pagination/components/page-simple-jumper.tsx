import React from 'react';
import { isUndefined } from '@mx-design/web-utils';
import { Input } from '../../Input';
import { useJumperStore } from '../store';
// type
import type { PageJumperProps } from '../store';

export function SimplePageJumper(props: PageJumperProps) {
  const { inputText, inputRef, prefixCls, handleChange, handleJump, totalPages, disabled, inputConfig, simple, onFocus } = useJumperStore(
    props,
    props.current
  );

  return (
    <div className={prefixCls}>
      {inputConfig.showJumper ? (
        <Input
          ref={inputRef}
          className={`${prefixCls}-input`}
          value={!isUndefined(inputText) ? inputText.toString() : undefined}
          disabled={disabled || !totalPages}
          onFocus={onFocus}
          onChange={handleChange}
          onPressEnter={handleJump}
          onBlur={handleJump}
        />
      ) : (
        <span>{inputText}</span>
      )}
      {simple && (
        <>
          <span className={`${prefixCls}-separator`}>/</span>
          <span>{totalPages}</span>
        </>
      )}
    </div>
  );
}
