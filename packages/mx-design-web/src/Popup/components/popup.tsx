import React, { forwardRef, useState, useRef, useMemo, useEffect, useImperativeHandle, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useMergeValue, useMergeProps } from '@mx-design/hooks';
import { debounce } from '@mx-design/web-utils';
import { usePopper } from '../../Popper/use-popper';
import { Portal } from '../../Portal';
import { getRefDom } from '../utils';
import { ConfigContext } from '../../ConfigProvider';
import { useClassNames, useTrigger } from '../hooks';
import { PopupCard } from './popupCard';
import { useResizeObserver } from '../../hooks';
// type
import type { PopupRef, PopupProps, PopupVisibleChangeContext } from '../interface';

const defaultProps = {
  attach: 'body',
  placement: 'top',
  showArrow: false,
  trigger: 'hover',
  isCloseClickAway: false,
} as const;

// hover->setVisibleChange->onVisibleChange->setPopupElement
export const Popup = forwardRef((baseProps: PopupProps, ref: React.RefObject<PopupRef>) => {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<PopupProps>(baseProps, defaultProps, componentConfig?.Popup);
  const {
    trigger,
    content,
    placement,
    attach,
    showArrow,
    overlayClassName,
    overlayInnerClassName,
    overlayStyle,
    overlayInnerStyle,
    triggerElement,
    children = triggerElement,
    disabled,
    zIndex,
    onScroll,
    onScrollToBottom,
    popperOptions,
    themeStyle,
  } = props;

  // classnames
  const { popupRefCls, arrowCls, contentRefCls } = useClassNames({
    getPrefixCls,
    showArrow,
    overlayInnerClassName,
    overlayClassName,
  });

  const [visible, onVisibleChange] = useMergeValue(false, {
    value: props.visible,
    defaultValue: false,
  });

  const setVisibleChange = (newVisible: boolean, context: PopupVisibleChangeContext) => {
    onVisibleChange(newVisible);
    // uncontrolled
    if (props.visible === undefined && visible !== newVisible) {
      props.onVisibleChange?.(newVisible, context);
    }
    // controlled
    if (props.visible !== undefined && props.visible !== newVisible) {
      props.onVisibleChange?.(newVisible, context);
    }
  };

  const [popupElement, setPopupElement] = useState(null);
  const popupRef = useRef(null); // popup dom 元素，css transition 需要用
  const portalRef = useRef(null); // portal dom 元素
  const contentRef = useRef(null); // 内容部分
  const popperRef = useRef(null); // 保存 popper 实例

  // 判断展示浮层
  const showOverlay = useMemo(() => {
    if (!content) return false;
    return visible || !!popupElement;
  }, [content, visible, popupElement]);

  const { getTriggerNode, getPopupProps, triggerRef } = useTrigger({
    content,
    disabled,
    trigger,
    visible,
    setVisibleChange,
    popupElement,
  });
  const triggerNode = getTriggerNode(children);

  popperRef.current = usePopper(getRefDom(triggerRef), popupElement, {
    placement,
    ...popperOptions,
  });
  const { styles, attributes, state, update } = popperRef.current;

  const updateTimeRef = useRef(null);

  // 监听 trigger 节点或内容变化动态更新 popup 定位
  useResizeObserver(getRefDom(triggerRef), () => {
    clearTimeout(updateTimeRef.current);
    updateTimeRef.current = setTimeout(() => {
      popperRef.current?.update?.();
    }, 0);
  });

  // 监听 popupRef 节点或内容变化动
  useResizeObserver(popupRef?.current, () => {
    clearTimeout(updateTimeRef.current);
    updateTimeRef.current = setTimeout(() => {
      popperRef.current?.update?.();
    }, 0);
  });

  useEffect(() => () => clearTimeout(updateTimeRef.current), []);

  function handleScroll(e: React.WheelEvent<HTMLDivElement>) {
    onScroll?.({ e });

    // 防止多次触发添加截流
    const debounceOnScrollBottom = debounce((e) => onScrollToBottom?.({ e }), 100);

    const { scrollTop, clientHeight, scrollHeight } = e.target as HTMLDivElement;
    // windows 下滚动会出现小数，所以这里取整
    if (clientHeight + Math.floor(scrollTop) === scrollHeight) {
      // touch bottom
      debounceOnScrollBottom(e);
    }
  }

  // 整理浮层样式
  function getOverlayStyle(overlayStyle: PopupProps['overlayStyle']) {
    if (getRefDom(triggerRef) && popupRef.current && typeof overlayStyle === 'function') {
      return { ...overlayStyle(getRefDom(triggerRef), popupRef.current) };
    }
    return { ...overlayStyle };
  }

  const overlay = showOverlay && visible && (
    <Portal attach={attach} ref={portalRef}>
      <PopupCard
        visible={visible}
        popupRef={popupRef}
        setPopupElement={setPopupElement}
        styles={styles}
        zIndex={zIndex}
        getOverlayStyle={getOverlayStyle}
        overlayStyle={overlayStyle}
        themeStyle={themeStyle}
        popupRefCls={popupRefCls}
        attributes={attributes}
        getPopupProps={getPopupProps}
        placement={placement}
        contentRefCls={contentRefCls}
        contentRef={contentRef}
        overlayInnerStyle={overlayInnerStyle}
        content={content}
        showArrow={showArrow}
        arrowCls={arrowCls}
        handleScroll={handleScroll}
        state={state}
        update={update}
      />
    </Portal>
  );

  useImperativeHandle(ref, () => ({
    getPopper: () => popperRef.current,
    getPopupElement: () => popupRef.current,
    getPortalElement: () => portalRef.current,
    getPopupContentElement: () => contentRef.current,
    setVisible: (visible: boolean) => setVisibleChange(visible, { trigger: 'document' }),
  }));

  return (
    <>
      {triggerNode}
      <AnimatePresence>{overlay}</AnimatePresence>
    </>
  );
});

Popup.displayName = 'Popup';
