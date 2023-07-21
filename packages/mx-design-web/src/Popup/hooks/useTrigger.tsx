import React, { useRef, useEffect, cloneElement, isValidElement } from 'react';
import { cs } from '@mx-design/web-utils';
import { mergeRefs } from '@mx-design/hooks';
import { callFuncWithDelay, getRefDom } from '../utils';
import { DELAY, ESC_KEY, NO_DELAY } from '../constants';

export function useTrigger({ content, disabled, trigger, visible, setVisibleChange, popupElement }) {
  const hasPopupMouseDown = useRef(false);
  const mouseDownTimer = useRef(0);
  const visibleTimer = useRef(null);
  const triggerRef = useRef<HTMLElement>(null);
  // 禁用和无内容时不展示
  const shouldToggle = !disabled && content;

  // 点击 trigger overlay 以外的元素关闭
  useEffect(() => {
    if (!shouldToggle || trigger === 'hover') return;
    const handleDocumentClick = (e: any) => {
      if (getRefDom(triggerRef)?.contains?.(e.target) || hasPopupMouseDown.current) {
        return;
      }
      visible && setVisibleChange(false, { e, trigger: 'document' });
    };
    document.addEventListener('mousedown', handleDocumentClick);
    document.addEventListener('touchend', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
      document.removeEventListener('touchend', handleDocumentClick);
    };
  }, [shouldToggle, visible, setVisibleChange, triggerRef, popupElement, trigger]);

  // 弹出内容交互处理
  function getPopupProps(): any {
    if (!shouldToggle) return {};

    return {
      onMouseEnter: () => {
        if (trigger === 'hover') {
          clearTimeout(visibleTimer.current);
        }
      },
      onMouseLeave: (e: MouseEvent) => {
        if (trigger === 'hover') {
          clearTimeout(visibleTimer.current);
          callFuncWithDelay({
            visibleTimer,
            delay: DELAY,
            callback: () => setVisibleChange(false, { e, trigger: 'trigger-element-hover' }),
          });
        }
      },
      onMouseDown: () => {
        clearTimeout(mouseDownTimer.current);
        hasPopupMouseDown.current = true;
        mouseDownTimer.current = window.setTimeout(() => {
          hasPopupMouseDown.current = false;
        });
      },
      onTouchEnd: () => {
        clearTimeout(mouseDownTimer.current);
        hasPopupMouseDown.current = true;
        mouseDownTimer.current = window.setTimeout(() => {
          hasPopupMouseDown.current = false;
        });
      },
    };
  }

  // 整理 trigger props
  function getTriggerProps(triggerNode: React.ReactElement, _ref) {
    if (!shouldToggle) return {};

    const triggerProps: any = {
      ref: mergeRefs(triggerRef, _ref),
      className: visible ? cs(triggerNode.props.className, 'mx-popup-open') : triggerNode.props.className,
      onMouseDown: (e: MouseEvent) => {
        if (trigger === 'mousedown') {
          callFuncWithDelay({
            visibleTimer,
            delay: NO_DELAY,
            callback: () => setVisibleChange(!visible, { e, trigger: 'trigger-element-mousedown' }),
          });
        }
        triggerNode.props.onMouseDown?.(e);
      },
      onClick: (e: MouseEvent) => {
        if (trigger === 'click') {
          callFuncWithDelay({
            visibleTimer,
            delay: NO_DELAY,
            callback: () => setVisibleChange(!visible, { e, trigger: 'trigger-element-click' }),
          });
        }
        triggerNode.props.onClick?.(e);
      },
      onTouchStart: (e: TouchEvent) => {
        if (trigger === 'hover' || trigger === 'mousedown') {
          callFuncWithDelay({
            visibleTimer,
            delay: NO_DELAY,
            callback: () => setVisibleChange(true, { e, trigger: 'trigger-element-hover' }),
          });
        }
        triggerNode.props.onTouchStart?.(e);
      },
      onMouseEnter: (e: MouseEvent) => {
        if (trigger === 'hover') {
          clearTimeout(visibleTimer.current);
          callFuncWithDelay({
            visibleTimer,
            delay: NO_DELAY,
            callback: () => setVisibleChange(true, { e, trigger: 'trigger-element-hover' }),
          });
        }
        triggerNode.props.onMouseEnter?.(e);
      },
      onMouseLeave: (e: MouseEvent) => {
        if (trigger === 'hover') {
          clearTimeout(visibleTimer.current);
          callFuncWithDelay({
            visibleTimer,
            delay: DELAY,
            callback: () => setVisibleChange(false, { e, trigger: 'trigger-element-hover' }),
          });
        }
        triggerNode.props.onMouseLeave?.(e);
      },
      onFocus: (...args: any) => {
        if (trigger === 'focus') {
          callFuncWithDelay({
            visibleTimer,
            delay: NO_DELAY,
            callback: () => setVisibleChange(true, { trigger: 'trigger-element-focus' }),
          });
        }
        triggerNode.props.onFocus?.(...args);
      },
      onBlur: (...args: any) => {
        if (trigger === 'focus') {
          callFuncWithDelay({
            visibleTimer,
            delay: NO_DELAY,
            callback: () => setVisibleChange(false, { trigger: 'trigger-element-blur' }),
          });
        }
        triggerNode.props.onBlur?.(...args);
      },
      onContextMenu: (e: MouseEvent) => {
        if (trigger === 'context-menu') {
          e.preventDefault();
          callFuncWithDelay({
            visibleTimer,
            delay: NO_DELAY,
            callback: () => setVisibleChange(true, { e, trigger: 'context-menu' }),
          });
        }
        triggerNode.props.onContextMenu?.(e);
      },
      onKeyDown: (e: KeyboardEvent) => {
        if (e?.key === ESC_KEY) {
          callFuncWithDelay({
            visibleTimer,
            delay: NO_DELAY,
            callback: () => setVisibleChange(false, { e, trigger: 'keydown-esc' }),
          });
        }
        triggerNode.props.onKeyDown?.(e);
      },
    };

    return triggerProps;
  }

  // 整理 trigger 元素
  function getTriggerNode(children: React.ReactNode): React.ReactNode {
    let child: any = Array.isArray(children) ? children[0] : children;
    if (!isValidElement(child)) {
      child = <span>{child}</span>;
    }
    return cloneElement(child, getTriggerProps(child, child?.ref));
  }

  return {
    getTriggerNode,
    getPopupProps,
    triggerRef,
  };
}
