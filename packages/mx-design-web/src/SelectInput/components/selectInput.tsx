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
export const SelectInput = React.forwardRef<Partial<PopupRef>, SelectInputProps>((props, ref) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const selectInputRef = useRef<PopupRef>();
  const { multiple, value, popupVisible, popupProps, borderless, disabled, className } = props;
  const { commonInputProps, inputRef, onInnerClear, renderSelectSingle } = useSingle(props);
  // const { tagInputRef, multipleInputValue, renderSelectMultiple } = useMultiple(props);

  const { overlayInnerStyle, innerPopupVisible, onInnerPopupVisibleChange } = useOverlayInnerStyle(props);

  const { popupClasses } = useClassNames({ getPrefixCls, className, popupVisible, innerPopupVisible, value, borderless });

  useImperativeHandle(ref, () => ({
    ...(selectInputRef.current || {}),
    ...(inputRef.current || {}),
    // ...(tagInputRef.current || {}),
  }));

  // 浮层显示的受控与非受控
  const visibleProps = { visible: popupVisible ?? innerPopupVisible };

  return (
    <div className={popupClasses} style={props.style}>
      <Popup
        ref={selectInputRef}
        trigger={popupProps?.trigger || 'click'}
        placement="bottom-start"
        content={() => props.panel}
        onVisibleChange={onInnerPopupVisibleChange}
        {...visibleProps}
        {...popupProps}
        disabled={disabled}
        overlayInnerStyle={overlayInnerStyle}
      >
        {renderSelectSingle(visibleProps.visible)}
      </Popup>
    </div>
  );
});
