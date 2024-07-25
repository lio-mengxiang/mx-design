import React, { forwardRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTimer } from '../hooks';
import { applyNotificationSlide, getCardStyle } from '../utils';
import { Alert } from '../../Alert';
// type
import type { MessageCardProps } from '../interface';

function _MessageCardContainer(props: MessageCardProps, ref) {
  const { onMouseEnter, onMouseLeave } = useTimer(props);

  const { icon, type, style, title, content, operation, closable, showIcon, className, remove, id, onClose, position, themeStyle } = props;

  const toastStyle = useMemo(() => getCardStyle(position), [position]);

  return (
    <motion.div
      layout
      variants={applyNotificationSlide}
      custom={{ position }}
      animate="animate"
      exit="exit"
      initial="initial"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={toastStyle}
      ref={ref}
    >
      <Alert
        icon={icon}
        type={type}
        themeStyle={themeStyle}
        style={style}
        title={title}
        content={content}
        operation={operation}
        closable={closable}
        showIcon={showIcon}
        className={className}
        onClose={() => {
          remove?.(id);
          onClose?.();
        }}
      />
    </motion.div>
  );
}

export const MessageCardContainer = forwardRef(_MessageCardContainer);
