import React, { useContext, useRef } from 'react';
import { useMergeProps, useMergeValue } from '@mx-design/hooks';
import { isFunction, omit } from '@mx-design/web-utils';
import Group from './group';
import { ConfigContext } from '../ConfigProvider';
import { RadioGroupContext } from './radioContext';
import { getMergeProps } from './utils';
import { useClassNames } from './hooks';
// types
import type { RadioGroupContextProps, RadioProps } from './interface';

const handleInputClick = (e) => {
  e.stopPropagation();
};

function Radio(baseProps: RadioProps) {
  // context
  const context = useContext<RadioGroupContextProps>(RadioGroupContext);
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);

  // props
  const props = useMergeProps<RadioProps>(baseProps, {}, componentConfig?.Radio);
  const mergeProps = getMergeProps({ props, context });
  const { disabled, children, value, style, className, ...rest } = mergeProps;

  // ref
  const inputRef = useRef<HTMLInputElement>(null);

  // state
  const [checked, setChecked] = useMergeValue(false, {
    value: mergeProps.checked,
    defaultValue: mergeProps.defaultChecked,
  });

  // className
  const { wrapperCls, maskCls, buttonInnerCls, textCls } = useClassNames({ context, disabled, checked, className, getPrefixCls });

  // function
  const onChange = (e) => {
    e.persist();
    e.stopPropagation();
    if (context.group) {
      context?.onChangeValue?.(mergeProps.value, e);
    } else if (!('checked' in props) && !checked) {
      setChecked(true);
    }
    !checked && mergeProps.onChange?.(true, e);
  };

  const onLabelClick = function (e) {
    if (isFunction(props.children)) {
      e.preventDefault();
      inputRef.current?.click();
    }
    rest?.onClick?.(e);
  };

  return (
    <label {...omit(rest, ['checked', 'onChange'])} onClick={onLabelClick} style={style} className={wrapperCls}>
      <input
        ref={inputRef}
        disabled={!!disabled}
        value={value}
        type="radio"
        checked={!!checked}
        onChange={onChange}
        onClick={handleInputClick}
      />
      {isFunction(children) ? (
        children({ checked })
      ) : context.type === 'radio' ? (
        <>
          <div className={maskCls} />
          {children && <span className={textCls}>{children}</span>}
        </>
      ) : (
        context.type === 'button' && <span className={buttonInnerCls}>{children}</span>
      )}
    </label>
  );
}

Radio.displayName = 'Radio';

Radio.Group = Group;

export default Radio;
