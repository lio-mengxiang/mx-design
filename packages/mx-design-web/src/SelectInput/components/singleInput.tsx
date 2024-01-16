import React, { useRef, useImperativeHandle, useContext } from 'react';
import { useClassNames, useSingle } from '../hooks';
import { Popup, PopupRef } from '../../Popup';
import { SelectInputProps } from '../interface';
import { ConfigContext } from '../../ConfigProvider';
import useOverlayInnerStyle from '../hooks/useOverlayInnerStyle';

/**
 * @zh 这是一个用来给例如Select组件做基础组件
 * @en this is basic component ，such as the basis of the Select component
 */
export const SingleInput = React.forwardRef<Partial<any>, SelectInputProps>((props, ref) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const selectInputRef = useRef<PopupRef>();
  const {
    value,
    popupVisible,
    popupProps,
    borderless,
    disabled,
    allowDropDown = true,
    className,
    loading,
    inputProps = {},
    inputValue,
    defaultInputValue,
    onPopupVisibleChange,
  } = props;

  const { overlayInnerStyle, innerPopupVisible, onInnerPopupVisibleChange } = useOverlayInnerStyle({
    popupProps,
    disabled,
    allowDropDown,
    onPopupVisibleChange,
  });

  // 浮层显示的受控与非受控
  const visible = popupVisible ?? innerPopupVisible;

  const { inputRef, renderSelect } = useSingle({
    value,
    loading,
    inputProps,
    inputValue,
    defaultInputValue,
    visible,
    disabled,
  });

  const { popupClasses } = useClassNames({ getPrefixCls, className, popupVisible, innerPopupVisible, value, borderless });

  useImperativeHandle(ref, () => ({
    selectInputRef: {
      ...(selectInputRef.current || {}),
    },
    inputRef: {
      ...(inputRef.current || {}),
    },
  }));

  return (
    <div className={popupClasses} style={props.style}>
      <Popup
        ref={selectInputRef}
        trigger="click"
        placement="bottom-start"
        content={() => props.panel}
        onVisibleChange={onInnerPopupVisibleChange}
        visible={visible}
        {...popupProps}
        disabled={disabled}
        overlayInnerStyle={overlayInnerStyle}
      >
        {renderSelect()}
      </Popup>
    </div>
  );
});
