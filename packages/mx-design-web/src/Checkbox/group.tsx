import React, { useContext, PropsWithChildren, useState } from 'react';
import { useMergeValue } from '@mx-design/hooks';
import { isArray, isObject } from '@mx-design/web-utils';
import Checkbox from './checkbox.nc';
import { ConfigContext } from '../ConfigProvider';
import { useGroupClassNames, useStyles } from './hooks';
import { CheckboxGroupContext } from './checkboxGroupContext';
// type
import type { CheckboxGroupProps } from './interface';

function Group<T extends string | number>(props: PropsWithChildren<CheckboxGroupProps<T>>) {
  // props
  const { getPrefixCls } = useContext(ConfigContext);
  const { disabled, options, style, themeStyle, className, error, children, direction = 'horizontal' } = props;

  // state
  const [value, setValue] = useMergeValue([], {
    defaultValue: props.defaultValue,
    value: props.value,
  });
  const [allOptionValues, setAllOptionValues] = useState([]);

  // classnames
  const { wrapperCls } = useGroupClassNames({ error, direction, className, getPrefixCls });
  // style
  const { wrapperStyle } = useStyles({ style, themeStyle });

  // function
  const onChange = function (optionValue, checked: boolean, e: Event) {
    const newVal = value?.slice() || [];
    if (checked) {
      newVal.push(optionValue);
    } else {
      newVal.splice(value.indexOf(optionValue), 1);
    }
    setValue(newVal);
    props?.onChange?.(
      newVal.filter((v) => allOptionValues.indexOf(v) > -1),
      e
    );
  };

  return (
    <span className={wrapperCls} style={wrapperStyle}>
      <CheckboxGroupContext.Provider
        value={{
          isCheckboxGroup: true,
          checkboxGroupValue: value,
          onGroupChange: onChange,
          disabled,
          registerValue: (value) => {
            setAllOptionValues((allOptionValues) => Array.from(new Set([...allOptionValues, value])));
          },
          unRegisterValue: (value) => {
            setAllOptionValues((allOptionValues) => allOptionValues.filter((x) => x !== value));
          },
        }}
      >
        {isArray(options)
          ? options.map((option) => {
              if (isObject(option)) {
                return (
                  <Checkbox disabled={disabled || option.disabled} key={option.value} value={option.value}>
                    {option.label}
                  </Checkbox>
                );
              }

              return (
                <Checkbox disabled={disabled} key={option} value={option}>
                  {option}
                </Checkbox>
              );
            })
          : children}
      </CheckboxGroupContext.Provider>
    </span>
  );
}

Group.displayName = 'CheckboxGroup';

export default Group;

export { CheckboxGroupProps };
