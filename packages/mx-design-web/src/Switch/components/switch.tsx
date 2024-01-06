import React, { useContext, forwardRef } from 'react';
import { useMergeProps, useMergeValue } from '@mx-design/hooks';
import { omit } from '@mx-design/web-utils';
import { ConfigContext } from '../../ConfigProvider';
import { useClassNames } from '../hooks';
import { Loading } from '../../Loading';
import { useStyles } from '../../hooks';
// type
import type { SwitchProps } from '../interface';

const defaultProps: Partial<SwitchProps> = {
  style: {},
  loadingIconSize: '14px',
  loadingIconBorderWidth: '2px',
};

function Switch(baseProps: SwitchProps, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<SwitchProps>(baseProps, defaultProps, componentConfig?.Switch);
  const {
    className,
    children,
    style,
    disabled,
    loading,
    onChange,
    checkedElement,
    unCheckedElement,
    checkedIcon,
    uncheckedIcon,
    onClick,
    loadingIconSize,
    loadingIconBorderWidth,
    themeStyle,
    ...rest
  } = props;

  const [checked, setChecked] = useMergeValue<boolean>(false, {
    defaultValue: props.defaultChecked,
    value: props.checked,
  });

  const onHandleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (loading) {
      return;
    }
    onClick?.(event);
    setChecked(!checked);
    onChange?.(!checked, event);
  };

  // classnames
  const { buttonCls, dotCls, textCls } = useClassNames({ className, checked, loading, getPrefixCls });
  // style
  const { wrapperStyle } = useStyles<SwitchProps>({ style, themeStyle });

  const extraProps = omit(rest, ['onChange', 'checked', 'error']);

  return (
    <button
      ref={ref}
      role="switch"
      aria-checked={!!checked}
      {...extraProps}
      style={wrapperStyle}
      className={buttonCls}
      disabled={disabled}
      onClick={onHandleClick}
      type="button"
    >
      <div className={dotCls}>
        {!loading && (checkedIcon || uncheckedIcon) && <>{checked ? checkedIcon : uncheckedIcon}</>}
        {loading && <Loading size={loadingIconSize} borderWidth={loadingIconBorderWidth} />}
      </div>
      {(checkedElement || unCheckedElement) && (
        <div className={textCls}>
          {checkedElement && checked && checkedElement}
          {unCheckedElement && !checked && unCheckedElement}
        </div>
      )}
    </button>
  );
}

const ForwardRefSwitch = forwardRef<unknown, SwitchProps>(Switch);

export { ForwardRefSwitch as Switch };
