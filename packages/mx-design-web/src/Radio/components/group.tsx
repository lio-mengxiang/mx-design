import React, { useContext } from 'react';
import { useMergeValue } from '@mx-design/hooks';
import { isArray, isObject } from '@mx-design/web-utils';
import { Radio } from './radio';
import { ConfigContext } from '../../ConfigProvider';
import { RadioGroupContext } from '../radioContext';
import { useGroupClassNames, useStyles } from '../hooks';
// types
import type { RadioGroupProps } from '../interface';

function Group(props: RadioGroupProps) {
  // props
  const { getPrefixCls } = useContext(ConfigContext);
  const {
    style,
    themeStyle,
    className,
    name,
    children,
    direction = 'horizontal',
    type = 'radio',
    mode = 'outline',
    options,
    disabled,
  } = props;

  // state
  const [value, setValue] = useMergeValue(undefined, {
    defaultValue: props.defaultValue,
    value: props.value,
  });

  // classnames
  const { wrapperCls } = useGroupClassNames({ direction, className, getPrefixCls, type, mode, disabled });
  // style
  const { wrapperStyle } = useStyles({ style, themeStyle });

  // functions
  const onChangeValue = (v: any, event): void => {
    const { onChange } = props;
    if (v === value) return;

    if (!('value' in props)) {
      setValue(v);
    }
    onChange?.(v, event);
  };

  return (
    <div className={wrapperCls} role="radiogroup" style={wrapperStyle}>
      <RadioGroupContext.Provider
        value={{
          onChangeValue,
          type,
          value,
          disabled,
          group: true,
          name,
        }}
      >
        {isArray(options)
          ? options.map((option, index) => {
              if (isObject(option)) {
                return (
                  <Radio key={option.value} disabled={disabled || option.disabled} value={option.value}>
                    {option.label}
                  </Radio>
                );
              }
              return (
                <Radio key={index} value={option} disabled={disabled}>
                  {option}
                </Radio>
              );
            })
          : children}
      </RadioGroupContext.Provider>
    </div>
  );
}

Group.displayName = 'RadioGroup';

export { Group };
