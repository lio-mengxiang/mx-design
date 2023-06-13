import React, { useContext } from 'react';
import Radio from './radio';
import { ConfigContext } from '../ConfigProvider';
import { useMergeValue } from '@mx-design/hooks';
import { isArray, isObject } from '@mx-design/web-utils';
import { RadioGroupContext } from './radioContext';
import { useGroupClassNames } from './hooks';
// types
import type { RadioGroupProps, RadioGroupContextProps } from './interface';

function Group(props: RadioGroupProps) {
  // props
  const { getPrefixCls } = useContext(ConfigContext);
  const { style, className, name, children, direction = 'horizontal', type = 'radio', mode = 'outline', options, disabled } = props;

  // state
  const [value, setValue] = useMergeValue(undefined, {
    defaultValue: props.defaultValue,
    value: props.value,
  });

  // classnames
  const { wrapperCls } = useGroupClassNames({ direction, className, getPrefixCls, type, mode, disabled });

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
    <div className={wrapperCls} role="radiogroup" style={style}>
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

export default Group;

export { RadioGroupProps, RadioGroupContextProps };
