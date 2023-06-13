import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTimer } from './hooks';
import { applyNotificationSlide, getCardStyle } from './utils';
import { Alert } from '../Alert';
// type
import type { MessageCardProps } from './interface';

function messageWrapper(props: MessageCardProps) {
  const { onMouseEnter, onMouseLeave } = useTimer(props);
  const { icon, type, style, title, content, operation, closable, showIcon, className, remove, id, onClose, position } = props;

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
    >
      <Alert
        icon={icon}
        type={type}
        style={style}
        title={title}
        content={content}
        operation={operation}
        closable={closable}
        showIcon={showIcon}
        className={className}
        _onClose={() => {
          remove?.(id);
        }}
        onClose={onClose}
      />
    </motion.div>
  );
}

messageWrapper.displayName = 'messageWrapper';

export default messageWrapper;
