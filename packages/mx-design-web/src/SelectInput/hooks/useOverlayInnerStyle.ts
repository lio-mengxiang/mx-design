import { isFunction, isObject } from '@mx-design/web-utils';
import { useMemo, useState } from 'react';
// import { PopupProps } from '../../Popup';
import type { SelectInputProps } from '../interface';
import type { PopupVisibleChangeContext } from '../../Popup';

export type overlayStyleProps = Pick<
  SelectInputProps,
  'popupProps' | 'readOnly' | 'onPopupVisibleChange' | 'disabled' | 'allowInput' | 'popupVisible'
>;

export default function useOverlayInnerStyle(props: overlayStyleProps) {
  const { popupProps, readOnly, disabled, onPopupVisibleChange, allowInput } = props;
  const [innerPopupVisible, setInnerPopupVisible] = useState(false);

  const matchWidth = (triggerElement: HTMLElement, popupElement: HTMLElement) => {
    if (!triggerElement || !popupElement) return;

    return {
      width: `${+triggerElement.offsetWidth}px`,
    };
  };

  const onInnerPopupVisibleChange = (visible: boolean, context: PopupVisibleChangeContext) => {
    if (disabled || readOnly) {
      return;
    }
    // 如果点击触发元素（输入框）且为可输入状态，则继续显示下拉框
    const newVisible = context.trigger === 'trigger-element-click' && allowInput ? true : visible;
    if (props.popupVisible !== newVisible) {
      setInnerPopupVisible(newVisible);
      onPopupVisibleChange?.(newVisible, context);
    }
  };

  const overlayInnerStyle = useMemo(() => {
    const overlayInnerStyle = popupProps?.overlayInnerStyle || {};
    if (isFunction(overlayInnerStyle) || (isObject(overlayInnerStyle) && overlayInnerStyle.width)) {
      return overlayInnerStyle;
    }

    return matchWidth;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popupProps?.overlayInnerStyle]);

  return {
    overlayInnerStyle,
    innerPopupVisible,
    onInnerPopupVisibleChange,
  };
}
