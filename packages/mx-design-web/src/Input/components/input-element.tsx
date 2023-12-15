import React, { useImperativeHandle } from 'react';
import { cs } from '@mx-design/web-utils';
import { useInputElementStore } from '../store';
import { IconHover } from '../../Common';
import { IconClose } from '../../Icon';
// type
import type { InputComponentProps, RefInputType } from '../interface';
import { useStyles } from '../../hooks';

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
      _getInputValueRef,
      themeStyle,
      ...rest
    } = props;

    // store
    const { inputProps, refInput, handleClear } = useInputElementStore({
      rest,
      placeholder,
      disabled,
      value,
      readOnly,
      onChange,
      onKeyDown,
      onPressEnter,
      onClear,
      maxLength: propMaxLength,
      normalizeTrigger,
      normalize,
    });

    // className
    const inputClassNames = cs(
      prefixCls,
      prefixCls && {
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
          dom: refInput.current,
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
                    ...wrapperStyle,
                    ...('height' in props ? { height } : {}),
                  }
            }
            className={inputClassNames}
          />
        )}
      </>
    );
  }
);
