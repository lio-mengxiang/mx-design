import React, { forwardRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTimer } from '../hooks';
import { applyNotificationSlide, getCardStyle } from '../utils';
import NotificationCard from './notificationCard';
// type
import type { NotificationCardProps } from '../interface';

function _NotificationWrapper(props: NotificationCardProps, ref) {
  const { onMouseEnter, onMouseLeave } = useTimer(props);
  const { icon, type, style, themeStyle, title, content, btn, closable, showIcon, className, remove, id, onClose, position } = props;

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
      <NotificationCard
        icon={icon}
        type={type}
        themeStyle={themeStyle}
        style={style}
        title={title}
        content={content}
        btn={btn}
        closable={closable}
        showIcon={showIcon}
        className={className}
        remove={remove}
        id={id}
        onClose={onClose}
      />
    </motion.div>
  );
}

export const NotificationWrapper = forwardRef(_NotificationWrapper);
