import React, { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IconSuccessFilling, IconPromptFilling, IconWarningFilling, IconDeleteFilling, IconLoading } from '../Icon';
import { getId } from './getId';

function IconWrapper({ children, type }) {
  return (
    <motion.span
      key={type}
      initial={{ scale: 0.6 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6, type: 'spring' }}
      style={{ display: 'inherit' }}
    >
      {children}
    </motion.span>
  );
}

export function renderIcon({ showIcon, type, icon, iconClassNames, size = '18px' }) {
  let iconContent: ReactNode;

  if (icon) {
    iconContent = <IconWrapper type={icon?.key}>{icon}</IconWrapper>;
  } else if (showIcon) {
    switch (type) {
      case 'info':
        iconContent = (
          <IconWrapper type={type}>
            <IconPromptFilling size={size} />
          </IconWrapper>
        );
        break;
      case 'success':
        iconContent = (
          <IconWrapper type={type}>
            <IconSuccessFilling size={size} />
          </IconWrapper>
        );
        break;
      case 'error':
        iconContent = (
          <IconWrapper type={type}>
            <IconDeleteFilling size={size} />
          </IconWrapper>
        );
        break;
      case 'warning':
        iconContent = (
          <IconWrapper type={type}>
            <IconWarningFilling size={size} />
          </IconWrapper>
        );
        break;
      case 'loading':
        iconContent = (
          <IconWrapper type={type}>
            <IconLoading size={size} spin />
          </IconWrapper>
        );
        break;
      default:
        break;
    }
  }
  return (
    <span className={iconClassNames}>
      <AnimatePresence>{iconContent} </AnimatePresence>
    </span>
  );
}
