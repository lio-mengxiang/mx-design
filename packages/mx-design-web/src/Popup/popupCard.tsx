import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { applyPopupSlide } from './utils';
import { passive } from './constants';

export function PopupCard(props) {
  const {
    popupRef,
    setPopupElement,
    styles,
    zIndex,
    getOverlayStyle,
    overlayStyle,
    themeStyle,
    popupRefCls,
    attributes,
    getPopupProps,
    placement,
    contentRefCls,
    contentRef,
    overlayInnerStyle,
    content,
    showArrow,
    arrowCls,
    handleScroll,
    state,
    update,
  } = props;

  useEffect(() => {
    if (!state) return;
    const scrollParents = [...new Set([...state.scrollParents.reference, ...state.scrollParents.popper])];
    scrollParents.forEach((scrollParent) => {
      scrollParent.addEventListener('scroll', update, passive);
    });

    window.addEventListener('resize', update, passive);

    return () => {
      scrollParents.forEach((scrollParent) => {
        scrollParent.removeEventListener('scroll', update);
      });
      window.removeEventListener('resize', update);
    };
  }, [state, update]);

  return (
    <div
      ref={(node) => {
        if (node) {
          popupRef.current = node;
          setPopupElement(node);
        }
      }}
      style={{ ...styles.popper, zIndex, ...getOverlayStyle(overlayStyle), ...themeStyle }}
      className={popupRefCls}
      {...attributes.popper}
      {...getPopupProps()}
    >
      <motion.div variants={applyPopupSlide(placement)} animate="animate" exit="exit" initial="initial">
        <div ref={contentRef} className={contentRefCls} style={getOverlayStyle(overlayInnerStyle)} onScroll={handleScroll}>
          {content}
          {showArrow ? <div style={styles.arrow} className={arrowCls} /> : null}
        </div>
      </motion.div>
    </div>
  );
}
