import React, { useContext, useImperativeHandle, ForwardRefExoticComponent } from 'react';
import { cs, contains } from '@mx-design/web-utils';
import { useMergeProps } from '@mx-design/hooks';
import { ConfigContext } from '../../ConfigProvider';
import { InputComponent } from './input-element';
import { inputAddon, keepFocus } from '../utils';
import { useInputStore } from '../store';
import { useInputClassNames } from '../hooks';
import { Search } from './search';
import { Password } from './password';
import { useStyles } from '../../hooks';
// type
import { InputProps, RefInputType } from '../interface';

const defaultProps: Partial<InputProps> = {
  normalizeTrigger: ['onBlur'],
};

function Input(baseProps: InputProps, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<InputProps>(baseProps, defaultProps, componentConfig?.Input);
  const {
    className,
    style,
    addBefore,
    addAfter,
    prefix,
    beforeStyle,
    afterStyle,
    height,
    disabled,
    allowClear,
    themeStyle,
    customSlot,
    customSlotClassName,
    readOnly,
  } = props;
  const prefixCls = getPrefixCls('input');

  // store
  const { needWrapper, status, onChange, value, suffixElement, isCustomHeight, setFocus, focus, inputRef, inputWrapperRef, wrapperRef } =
    useInputStore({
      prefixCls,
      ...props,
    });

  useImperativeHandle(
    ref,
    () => {
      return {
        ...inputRef.current,
        dom: wrapperRef.current,
      };
    },
    []
  );

  // classnames
  const { wrapperCls, innerWrapperCls, groupCls, addBeforeCls, groupPrefixCls, suffixCls, addAfterCls } = useInputClassNames({
    prefixCls,
    className,
    isCustomHeight,
    suffixElement,
    disabled,
    status,
    prefix,
    allowClear,
    focus,
    readOnly,
    needWrapper,
  });

  const { wrapperStyle } = useStyles<InputProps>({ style, themeStyle });

  const inputElement = (
    <InputComponent
      ref={inputRef}
      {...props}
      status={status}
      onFocus={(e) => {
        setFocus(true);
        props.onFocus?.(value, e);
      }}
      onBlur={(e) => {
        setFocus(false);
        props.onBlur?.(value, e);
      }}
      onChange={onChange}
      prefixCls={prefixCls}
      value={value}
      hasParent={!!needWrapper || allowClear}
    />
  );

  return needWrapper ? (
    <div className={wrapperCls} style={{ ...wrapperStyle, ...(isCustomHeight ? { height } : {}) }} ref={wrapperRef}>
      <span className={groupCls}>
        {inputAddon(addBeforeCls, addBefore, beforeStyle)}
        <span
          className={innerWrapperCls}
          ref={inputWrapperRef}
          onMouseDown={(e) => {
            // When clicking Addon, we should blocking default behavior，so input doesn't lose focus
            if ((e.target as HTMLElement).tagName !== 'INPUT') {
              if (inputWrapperRef.current && contains(inputWrapperRef.current, e.target)) {
                e.preventDefault();
              }
            }
          }}
          onClick={(e) => {
            // when the tooltip pop-up box appears, i click the pop-up box. input should not be focused
            if (inputWrapperRef.current && contains(inputWrapperRef.current, e.target)) {
              inputRef.current && inputRef.current.focus();
            }
          }}
        >
          {inputAddon(groupPrefixCls, prefix)}
          {inputAddon(customSlotClassName, customSlot)}
          {inputElement}
          {inputAddon(suffixCls, suffixElement)}
        </span>
        {inputAddon(addAfterCls, addAfter, afterStyle)}
      </span>
    </div>
  ) : allowClear ? (
    <span
      className={cs(className, innerWrapperCls)}
      style={{ ...wrapperStyle, ...(isCustomHeight ? { height } : {}) }}
      onMouseDown={keepFocus}
      onClick={() => {
        inputRef.current && inputRef.current.focus();
      }}
    >
      {inputElement}
    </span>
  ) : (
    inputElement
  );
}

type InputRefType = ForwardRefExoticComponent<InputProps & React.RefAttributes<RefInputType>> & {
  Search: typeof Search;
  Password: typeof Password;
};

const InputElement = React.forwardRef(Input) as InputRefType;

InputElement.displayName = 'Input';

InputElement.Search = Search;

InputElement.Password = Password;

export { InputElement as Input };
