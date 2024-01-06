import React, { useContext, useImperativeHandle } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { cs } from '@mx-design/web-utils';
import { InputComponent } from '../../Input/components/input-element';
import { ConfigContext } from '../../ConfigProvider';
import { handleTokenSeparators, mergedRenderTag, tryAddInputValueToTag } from '../utils';
import { useInputTagStore } from '../store';
import { BaseInputTag } from './base-Input-tag';
// type
import type { InputTagHandle, InputTagProps, ObjectValueType } from '../interface';

const defaultProps: InputTagProps = {
  validate: (inputValue, values) => inputValue && values.every((item) => item.value !== inputValue),
};

function InputTag(baseProps: InputTagProps<string | ObjectValueType>, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<InputTagProps>(baseProps, defaultProps, componentConfig?.InputTag);
  const prefixCls = getPrefixCls('input-tag');
  const {
    className,
    style,
    placeholder,
    disabled,
    readOnly,
    allowClear,
    autoFocus,
    labelInValue,
    saveOnBlur,
    dragToSort,
    status,
    prefix,
    suffix,
    addBefore,
    addAfter,
    tokenSeparators,
    validate,
    renderTag,
    tagClassName,
    onInputChange,
    onKeyDown,
    onPaste,
    onChange,
    onFocus,
    onBlur,
    onPressEnter,
    onRemove,
    onClear,
    onClick,
    defaultValue,
    value: propsValue,
    inputValue: propsInputValue,
    ...rest
  } = props;

  const {
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
  } = useInputTagStore({
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
  });

  // const propsAppliedToRoot = { style, className };
  useImperativeHandle<any, InputTagHandle>(
    ref,
    () => {
      return {
        blur: refInput.current?.blur,
        focus: refInput.current?.focus,
      };
    },
    []
  );

  const eleInputTagCore = (
    <BaseInputTag
      needWrapper={needWrapper}
      className={className}
      style={style}
      focused={focused}
      refInput={refInput}
      onClick={onClick}
      prefixCls={prefixCls}
      hasPrefix={hasPrefix}
      prefix={prefix}
      draggable={draggable}
      hasSuffix={hasSuffix}
      suffix={suffix}
      clearIcon={clearIcon}
      disabled={disabled}
      status={status}
      readOnly={readOnly}
      value={value}
      rest={rest}
    >
      {value.map((item, index) => {
        return mergedRenderTag({
          readOnly,
          item,
          disabled,
          index,
          renderTag,
          value,
          prefixCls,
          onRemove,
          setValue,
          onChange,
          tagClassName,
          labelInValue,
        });
      })}
      <InputComponent
        autoComplete="off"
        disabled={disabled}
        readOnly={readOnly}
        ref={refInput}
        autoFocus={autoFocus}
        placeholder={!value.length ? placeholder : ''}
        prefixCls={`${prefixCls}-input`}
        autoFitWidth={{
          delay: () => refDelay.current,
          pure: true,
          minWidth: value.length ? undefined : '100%',
        }}
        onPressEnter={async (e) => {
          inputValue && e.preventDefault();
          onPressEnter?.(e);
          await tryAddInputValueToTag({ validate, inputValue, value, setInputValue, disabled, readOnly, setValue, onChange, labelInValue });
        }}
        onFocus={(e) => {
          if (!disabled && !readOnly) {
            setFocused(true);
            onFocus?.(e);
          }
        }}
        onBlur={async (e) => {
          setFocused(false);
          onBlur?.(e);
          if (saveOnBlur) {
            await tryAddInputValueToTag({
              validate,
              inputValue,
              value,
              setInputValue,
              disabled,
              readOnly,
              setValue,
              onChange,
              labelInValue,
            });
          }
          setInputValue('');
        }}
        value={inputValue}
        onChange={(str, event) => {
          // Only fire callback on user input to ensure parent component can get real input value on controlled mode.
          onInputChange?.(str, event);

          // Pasting event also trigger onChange event, and onChange event is triggered later than onPaste event
          event.nativeEvent.inputType !== 'insertFromPaste' &&
            handleTokenSeparators({
              str,
              refTSLastSeparateTriggered,
              tokenSeparators,
              validate,
              value,
              disabled,
              readOnly,
              setValue,
              onChange,
              labelInValue,
            });

          // if refTSLastSeparateTriggered.current exist, it represent value will be separated
          if (refTSLastSeparateTriggered.current) {
            setInputValue('');
          } else {
            setInputValue(str);
          }
        }}
        onKeyDown={(event) => {
          hotkeyHandler(event as any);
          onKeyDown?.(event);
        }}
        onPaste={(event) => {
          onPaste?.(event);

          handleTokenSeparators({
            str: event.clipboardData.getData('text'),
            refTSLastSeparateTriggered,
            tokenSeparators,
            validate,
            value,
            disabled,
            readOnly,
            setValue,
            onChange,
            labelInValue,
          });
        }}
      />
    </BaseInputTag>
  );

  return needWrapper ? (
    <div style={style} className={cs(`${prefixCls}-wrapper`, className)}>
      {needAddBefore && <div className={`${prefixCls}-addbefore`}>{addBefore}</div>}
      {eleInputTagCore}
      {needAddAfter && <div className={`${prefixCls}-addafter`}>{addAfter}</div>}
    </div>
  ) : (
    eleInputTagCore
  );
}

const InputTagComponent = React.forwardRef<InputTagHandle, InputTagProps<any>>(InputTag);

export { InputTagComponent as InputTag };
