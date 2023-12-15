import React, { useContext, useRef, useEffect } from 'react';
import { isFunction, omit } from '@mx-design/web-utils';
import { useMergeProps, useMergeValue } from '@mx-design/hooks';
import Group from './group';
import { ConfigContext } from '../../ConfigProvider';
import IconCheck from './icon-check';
import { CheckboxGroupContext } from '../checkboxGroupContext';
import { getMergeProps } from '../utils';
import { useClassNames } from '../hooks';
import { useStyles } from '../../hooks';
// type
import type { CheckboxProps } from '../interface';
import type { CheckboxGroupContextProps } from '../checkboxGroupContext';

const defaultProps = {};

function Checkbox<T extends string | number>(baseProps: CheckboxProps<T>, ref) {
  // CheckboxGroupContext
  const context = useContext<CheckboxGroupContextProps>(CheckboxGroupContext);
  const { onGroupChange } = context;

  // props
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<CheckboxProps>(baseProps, defaultProps, componentConfig?.Checkbox);
  const mergeProps = getMergeProps({ props, context });
  const { disabled, children, className, value, style, themeStyle, indeterminate, error, ...rest } = mergeProps;

  // ref
  const inputRef = useRef<HTMLInputElement>(null);

  // state
  const [checked, setChecked] = useMergeValue(false, {
    value: mergeProps.checked,
    defaultValue: mergeProps.defaultChecked,
  });

  // className
  const { wrapperCls, maskCls, maskIconCls, textCls } = useClassNames({
    error,
    disabled,
    indeterminate,
    checked,
    className,
    getPrefixCls,
  });

  // style
  const { wrapperStyle } = useStyles<CheckboxProps>({ style, themeStyle });

  useEffect(() => {
    context.registerValue(value);
    return () => {
      context.unRegisterValue(value);
    };
  }, [value]);

  // function
  const onChange = function (e) {
    e.persist();
    e.stopPropagation();
    if (context.isCheckboxGroup) {
      onGroupChange?.(mergeProps.value, e.target.checked, e);
    } else {
      setChecked(e.target.checked);
    }
    mergeProps?.onChange?.(e.target.checked, e);
  };

  const onLabelClick = function (e) {
    if (isFunction(mergeProps.children)) {
      e.preventDefault();
      inputRef.current?.click();
    }
    rest?.onClick?.(e);
  };

  return (
    <label
      ref={ref}
      aria-disabled={disabled}
      {...omit(rest, ['onChange'])}
      onClick={onLabelClick}
      className={wrapperCls}
      style={wrapperStyle}
    >
      <input
        value={value}
        disabled={!!disabled}
        ref={inputRef}
        checked={!!checked}
        onChange={onChange}
        // To avoid triggering onChange twice in Select if it's used in Select option.
        onClick={(e) => e.stopPropagation()}
        type="checkbox"
      />

      {isFunction(children) ? (
        children({ checked, indeterminate })
      ) : (
        <>
          <div className={maskCls}>
            <IconCheck className={maskIconCls} />
          </div>
          {children && <span className={textCls}>{children}</span>}
        </>
      )}
    </label>
  );
}

const ForwardRefCheckRef = React.forwardRef(Checkbox);

const CheckboxComponent = ForwardRefCheckRef as typeof ForwardRefCheckRef & {
  Group: typeof Group;
};

CheckboxComponent.displayName = 'Checkbox';

CheckboxComponent.Group = Group;

export { CheckboxComponent as Checkbox };
