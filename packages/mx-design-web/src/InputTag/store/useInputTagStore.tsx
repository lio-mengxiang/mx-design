import React, { useRef, useState } from 'react';
import { useMergeValue } from '@mx-design/hooks';
import { isUndefined } from '@mx-design/web-utils';
import { formatValue, isEmptyNode, tagCloseHandler, valueChangeHandler } from '../utils';
import { Backspace, getHotkeyHandler } from '../../utils';
import { useComputeAutoWidthDelay } from '../hooks';
import { IconHover } from '../../Common';
import { IconClose } from '../../Icon';
import { CLEAR } from '../constants';
// types
import type { RefInputType } from '../../Input/interface';
import type { InputTagProps, ObjectValueType } from '../interface';

interface useInputTagStoreProps {
  defaultValue: InputTagProps['defaultValue'];
  propsValue: InputTagProps['value'];
  propsInputValue: InputTagProps['inputValue'];
  dragToSort: InputTagProps['dragToSort'];
  readOnly: InputTagProps['readOnly'];
  disabled: InputTagProps['disabled'];
  prefix: InputTagProps['prefix'];
  suffix: InputTagProps['suffix'];
  addBefore: InputTagProps['addBefore'];
  addAfter: InputTagProps['addAfter'];
  onRemove: InputTagProps['onRemove'];
  onChange: InputTagProps['onChange'];
  labelInValue: InputTagProps['labelInValue'];
  allowClear: InputTagProps['allowClear'];
  onClear: InputTagProps['onClear'];
  prefixCls: string;
}

export function useInputTagStore(props: useInputTagStoreProps) {
  const {
    defaultValue,
    propsValue,
    propsInputValue,
    dragToSort,
    readOnly,
    disabled,
    prefix,
    suffix,
    addBefore,
    addAfter,
    onRemove,
    onChange,
    labelInValue,
    allowClear,
    prefixCls,
    onClear,
  } = props;

  const refInput = useRef<RefInputType>();
  const refTSLastSeparateTriggered = useRef<number>(null);

  const [focused, setFocused] = useState(false);

  const [value, setValue] = useMergeValue<ObjectValueType[]>([], {
    defaultValue: !isUndefined(defaultValue) ? formatValue(defaultValue) : undefined,
    value: !isUndefined(propsValue) ? formatValue(propsValue) : undefined,
  });
  const refDelay = useComputeAutoWidthDelay(value);
  const [inputValue, setInputValue] = useMergeValue('', {
    value: propsInputValue,
  });

  const clearIcon =
    allowClear && !disabled && !readOnly && value.length ? (
      <IconHover
        key="clearIcon"
        className={`${prefixCls}-clear-icon`}
        onClick={(e) => {
          e.stopPropagation();
          valueChangeHandler({ disabled, readOnly, setValue, value: [], onChange, labelInValue, reason: CLEAR });
          if (!focused) {
            refInput.current?.focus();
          }
          onClear?.();
        }}
      >
        <IconClose />
      </IconHover>
    ) : null;

  const draggable = !!(dragToSort && !readOnly && !disabled);
  const hasPrefix = !isEmptyNode(prefix);
  const hasSuffix = !isEmptyNode(suffix) || !isEmptyNode(clearIcon);
  const needAddBefore = !isEmptyNode(addBefore);
  const needAddAfter = !isEmptyNode(addAfter);
  const needWrapper = needAddBefore || needAddAfter;

  const hotkeyHandler = getHotkeyHandler(
    new Map([
      [
        Backspace.code,
        (event) => {
          if (!event.target.value && value.length) {
            for (let index = value.length - 1; index >= 0; index--) {
              const itemValue = value[index];
              if (itemValue.closable !== false) {
                tagCloseHandler({
                  item: itemValue,
                  index,
                  event,
                  onRemove,
                  value,
                  disabled,
                  readOnly,
                  setValue,
                  onChange,
                  labelInValue,
                });
                return;
              }
            }
          }
        },
      ],
    ])
  );

  return {
    refInput,
    refTSLastSeparateTriggered,
    focused,
    setFocused,
    value,
    setValue,
    inputValue,
    setInputValue,
    draggable,
    hasPrefix,
    hasSuffix,
    needAddBefore,
    needAddAfter,
    needWrapper,
    hotkeyHandler,
    refDelay,
    clearIcon,
  };
}
