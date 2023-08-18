import { useMergeValue } from '@mx-design/hooks';
import type { PopupVisibleChangeContext } from '../Popup';
// type
import type { DropdownProps } from './interface';

interface StoreProps extends Pick<DropdownProps, 'hideAfterItemClick' | 'onClick' | 'defaultPopupVisible' | 'popupVisible'> {
  onVisibleChange: DropdownProps['popupProps']['onVisibleChange'];
}

export function useDropdownStore({ hideAfterItemClick, onVisibleChange, onClick, defaultPopupVisible, popupVisible }: StoreProps) {
  const [isPopupVisible, togglePopupVisible] = useMergeValue(false, {
    defaultValue: defaultPopupVisible,
    value: popupVisible,
  });

  const changePopupVisible = (visible: boolean, e: PopupVisibleChangeContext) => {
    togglePopupVisible(visible);
    onVisibleChange?.(visible, e);
  };

  const handleMenuClick = (data: any, e: PopupVisibleChangeContext) => {
    if (hideAfterItemClick) {
      togglePopupVisible(false);
      onVisibleChange?.(false, e);
    }
    onClick?.(data, e);
  };

  return {
    isPopupVisible,
    handleMenuClick,
    changePopupVisible,
  };
}
