import React, { useImperativeHandle } from 'react';
import { cs, isObject } from '@mx-design/web-utils';
import { useInputElementStore } from '../store';
import { IconHover } from '../../Common';
import { IconClose } from '../../Icon';
import { useResizeObserver, useStyles } from '../../hooks';
import { fillNBSP } from '../../utils';
// type
import type { InputComponentProps, RefInputType } from '../interface';

export const InputComponent = React.forwardRef<RefInputType, InputComponentProps>(
  (props: InputComponentProps & { mergedMaxLength: number }, ref) => {
    const {
      allowClear,
      disabled,
      placeholder,
      className,
      style,
      height,
      prefixCls,
      hasParent,
      value,
      autoFitWidth,
      onClear,
      readOnly,
      onChange,
      onKeyDown,
      onPressEnter,
      maxLength: propMaxLength,
      clearIcon,
      status,
      showWordLimit,
      defaultValue,
      addBefore,
      addAfter,
      afterStyle,
      beforeStyle,
      prefix,
      suffix,
      normalize,
      normalizeTrigger,
      _needWrapper,
      themeStyle,
      slot,
      customSlot,
      customSlotClassName,
      ...rest
    } = props;

    // store
    const { inputProps, refInput, refInputMirror, refPrevInputWidth, handleClear, mirrorValue, inputComputeStyle, updateInputWidth } =
      useInputElementStore({
        rest,
        placeholder,
        disabled,
        value,
        autoFitWidth,
        readOnly,
        onChange,
        onKeyDown,
        onPressEnter,
        onClear,
        maxLength: propMaxLength,
        normalizeTrigger,
        normalize,
        _needWrapper,
      });

    // className
    const inputClassNames = cs(
      prefixCls,
      {
        [`${prefixCls}-${props.status}`]: props.status,
        [`${prefixCls}-disabled`]: disabled,
      },
      hasParent ? undefined : className
    );
    const { wrapperStyle } = useStyles<InputComponentProps>({ style, themeStyle });

    useImperativeHandle(
      ref,
      () => {
        return {
          inputDom: refInput.current,
          focus: () => {
            refInput.current?.focus?.();
          },
          blur: () => {
            refInput.current?.blur?.();
          },
        };
      },
      []
    );

    //监听 popupRef 节点或内容变化动
    useResizeObserver(refInputMirror?.current, () => {
      const inputWidth = refInputMirror.current.offsetWidth;
      if (typeof autoFitWidth === 'object') {
        const delay =
          typeof autoFitWidth.delay === 'function' ? autoFitWidth.delay(inputWidth, refPrevInputWidth.current) : autoFitWidth.delay;
        delay ? setTimeout(updateInputWidth, delay) : updateInputWidth();
      } else {
        updateInputWidth();
      }
      refPrevInputWidth.current = inputWidth;
    });

    return (
      <>
        {allowClear ? (
          <>
            <input ref={refInput} {...inputProps} className={inputClassNames} />
            {!readOnly && !disabled && allowClear && value ? (
              clearIcon !== undefined ? (
                <span
                  tabIndex={0}
                  className={`${prefixCls}-clear-icon`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClear(e);
                  }}
                >
                  {clearIcon}
                </span>
              ) : (
                <IconHover
                  tabIndex={0}
                  className={`${prefixCls}-clear-icon`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClear(e);
                  }}
                >
                  <IconClose />
                </IconHover>
              )
            ) : null}
          </>
        ) : (
          <input
            ref={refInput}
            {...inputProps}
            style={
              hasParent
                ? {}
                : {
                    minWidth: isObject(autoFitWidth) ? autoFitWidth.minWidth : undefined,
                    maxWidth: isObject(autoFitWidth) ? autoFitWidth.maxWidth : undefined,
                    ...wrapperStyle,
                    ...('height' in props ? { height } : {}),
                  }
            }
            className={inputClassNames}
          />
        )}
        {autoFitWidth && (
          <span
            className={cs(`${prefixCls}-mirror`)}
            style={
              hasParent
                ? inputComputeStyle
                : {
                    ...inputComputeStyle,
                    ...style,
                    ...('height' in props ? { height } : {}),
                  }
            }
            ref={refInputMirror}
          >
            {fillNBSP(mirrorValue)}
          </span>
        )}
      </>
    );
  }
);
