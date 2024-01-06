import React, { useRef, MouseEvent, useContext } from 'react';
import { useMergeValue } from '@mx-design/hooks';
import { pick } from '@mx-design/web-utils';
import { Input } from '../../Input';
import { IconLoading } from '../../Icon';
import { getInputValue } from '../utils';
import { ConfigContext } from '../../ConfigProvider';
import { useSingleClassNames } from './useSingleClassNames';
import { COMMON_PROPERTIES } from '../constants';
import type { SelectInputCommonProperties, SelectInputProps } from '../interface';
import type { InputProps } from '../../Input';

export function useSingle(props: SelectInputProps) {
  const { getPrefixCls } = useContext(ConfigContext);
  const {
    value,
    keys,
    loading,
    inputValue: controlledInputValue,
    defaultInputValue,
    inputProps,
    onEnter,
    onFocus,
    onClear,
    suffix,
    valueDisplay,
    allowInput,
    className,
    popupVisible,
  } = props;

  const inputRef = useRef();
  const [inputValue, setInputValue] = useMergeValue('', {
    value: controlledInputValue,
    defaultValue: defaultInputValue,
  });

  const commonInputProps: SelectInputCommonProperties = {
    ...pick(props, COMMON_PROPERTIES),
    suffix: loading ? <IconLoading spin /> : suffix,
  };

  const onInnerClear = (e: MouseEvent<SVGSVGElement>) => {
    e?.stopPropagation();
    onClear?.(e);
    setInputValue('');
  };

  const onInnerInputChange: InputProps['onChange'] = (value) => {
    if (props.allowInput) {
      setInputValue(value);
    }
  };

  const { inputCls } = useSingleClassNames({ getPrefixCls, className, popupVisible });

  const renderSelectSingle = (popupVisible: boolean) => {
    const displayedValue = popupVisible && props.allowInput ? inputValue : getInputValue(value, keys);

    return (
      <Input
        ref={inputRef}
        {...commonInputProps}
        placeholder={valueDisplay ? '' : props.placeholder}
        value={valueDisplay ? ' ' : displayedValue}
        customSlot={
          <>
            {props.label}
            {valueDisplay}
          </>
        }
        onChange={onInnerInputChange}
        readOnly={!allowInput}
        onClear={onInnerClear}
        onFocus={(e) => {
          onFocus?.(value, { e });
        }}
        onPressEnter={(e) => {
          onEnter?.(value, { e });
        }}
        {...inputProps}
        className={inputCls}
      />
    );
  };

  return {
    inputRef,
    commonInputProps,
    onInnerClear,
    renderSelectSingle,
  };
}
