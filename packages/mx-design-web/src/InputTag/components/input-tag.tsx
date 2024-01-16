import React, { useContext, useImperativeHandle, useRef } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { cs } from '@mx-design/web-utils';
import { InputComponent } from '../../Input/components/input-element';
import { ConfigContext } from '../../ConfigProvider';
import { handleTokenSeparators, mergedRenderTag, tryAddInputValueToTag } from '../utils';
import { useInputTagStore } from '../store';
import { BaseInputTagComponent } from './base-Input-tag';
// type
import type { InputTagHandle, InputTagProps, ObjectValueType } from '../interface';

const defaultProps: InputTagProps = {
  validate: (inputValue, values) => inputValue && values.every((item) => item.value !== inputValue),
};

function InputTag(baseProps: InputTagProps<string | ObjectValueType>, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<InputTagProps>(baseProps, defaultProps, componentConfig?.InputTag);
  const prefixCls = getPrefixCls('input-tag');
  const wrapperRef = useRef();
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
        dom: wrapperRef.current,
      };
    },
    []
  );

  // const maxTagCountNumber = isObject(maxTagCount) ? maxTagCount.count : maxTagCount;

  // const maxTagCountRender =
  //   isObject(maxTagCount) && isFunction(maxTagCount.render) ? maxTagCount.render : (invisibleCount) => `+${invisibleCount}...`;

  // const usedMaxTagCount = typeof maxTagCountNumber === 'number' ? Math.max(maxTagCountNumber, 0) : usedValue.length;
  // const tagsToShow: ObjectValueType[] = [];
  // let lastClosableTagIndex = -1;

  // for (let i = usedValue.length - 1; i >= 0; i--) {
  //   const v = usedValue[i];
  //   const result = renderText(v);
  //   if (i < usedMaxTagCount) {
  //     tagsToShow.unshift({
  //       value: v,
  //       label: result.text,
  //       closable: !result.disabled,
  //     });
  //   }
  //   if (!result.disabled && lastClosableTagIndex === -1) {
  //     lastClosableTagIndex = i;
  //   }
  // }

  // const invisibleTagCount = usedValue.length - usedMaxTagCount;
  // if (invisibleTagCount > 0) {
  //   tagsToShow.push({
  //     label: maxTagCountRender(invisibleTagCount),
  //     closable: false,
  //     // InputTag needs to extract value as key
  //     value: MAX_TAG_COUNT_VALUE_PLACEHOLDER,
  //   });
  // }

  const eleInputTagCore = (
    <BaseInputTagComponent
      needWrapper={needWrapper}
      className={className}
      style={style}
      focused={focused}
      refInput={refInput}
      ref={wrapperRef}
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
        onPressEnter={async (val, e) => {
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
    </BaseInputTagComponent>
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
