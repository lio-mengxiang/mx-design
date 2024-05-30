import React, { ReactElement, useContext } from 'react';
import { cs, omit } from '@mx-design/web-utils';
import { useMergeProps } from '@mx-design/hooks';
import { Popup } from '../Popup';
import { ConfigContext } from '../ConfigProvider';
import { useDropdownStore } from './store';
import { HorizontalMenu } from '../Menu/HorizontalMenu/horizontalMenu';
// type
import { DropdownProps } from './interface';

export const defaultProps: Partial<DropdownProps> = {
  hideAfterItemClick: true,
  placement: 'bottom-start',
  trigger: 'hover',
};

function Dropdown(baseProps: DropdownProps) {
  // global context
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  // props
  const props = useMergeProps<DropdownProps>(baseProps, defaultProps, componentConfig?.Dropdown);
  const {
    popupProps,
    disabled,
    placement,
    trigger,
    className,
    children,
    hideAfterItemClick,
    droplist,
    style,
    defaultPopupVisible,
    popupVisible,
    maxHeight,
    maxWidth,
    customElement,
    themeStyle,
    addVisibleStatus,
    _menuInfoMap,
  } = props;

  // classnames
  const dropdownClass = getPrefixCls('dropdown');

  const arrayChildren = React.Children.toArray(children);

  // store
  const { isPopupVisible, changePopupVisible, handleMenuClick } = useDropdownStore({
    hideAfterItemClick,
    onVisibleChange: popupProps?.onVisibleChange,
    onClick: props?.onClick,
    defaultPopupVisible,
    popupVisible,
  });

  const renderPopup = () => {
    if (customElement) {
      return addVisibleStatus
        ? React.cloneElement(customElement, {
            ...(typeof disabled === 'boolean' ? { disabled, visible: isPopupVisible } : { visible: isPopupVisible }),
            onClickMenuItem: handleMenuClick,
          })
        : customElement;
    }
    if (!Array.isArray(droplist) || droplist.length === 0) return null;
    return (
      <HorizontalMenu
        isDropDown
        disabled={disabled}
        prefixCls={dropdownClass}
        menuList={droplist}
        placement="right-start"
        selectable
        _menuInfoMap={_menuInfoMap}
        onClickMenuItem={handleMenuClick}
      />
    );
  };

  return (
    <Popup
      isDropDown
      placement={placement}
      disabled={disabled}
      trigger={trigger}
      showArrow={false}
      content={renderPopup}
      visible={isPopupVisible}
      overlayInnerClassName={cs(dropdownClass, className, popupProps?.overlayInnerClassName)}
      overlayInnerStyle={{ ...style, ...themeStyle, maxHeight: maxHeight || style?.maxHeight, maxWidth: maxWidth || style?.maxWidth }}
      onVisibleChange={changePopupVisible}
      {...omit(popupProps, ['children', 'content', 'visible', 'isCloseClickAway'])}
    >
      {React.isValidElement(arrayChildren?.[0])
        ? addVisibleStatus
          ? React.cloneElement(arrayChildren?.[0] as ReactElement, {
              ...(typeof disabled === 'boolean' ? { disabled, visible: isPopupVisible } : { visible: isPopupVisible }),
            })
          : arrayChildren?.[0]
        : null}
    </Popup>
  );
}

Dropdown.displayName = 'Dropdown';

export default Dropdown;
