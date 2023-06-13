import React, { ReactNode } from 'react';
import { IconSuccessFilling, IconPromptFilling, IconWarningFilling, IconDeleteFilling } from '../Icon';
import { Loading } from '../Loading';

export function renderIcon({ showIcon, type, icon, iconClassNames, size = '18px' }) {
  let iconContent: ReactNode;
  if (icon) {
    iconContent = icon;
  } else if (showIcon) {
    switch (type) {
      case 'info':
        iconContent = <IconPromptFilling size={size} />;
        break;
      case 'success':
        iconContent = <IconSuccessFilling size={size} />;
        break;
      case 'error':
        iconContent = <IconDeleteFilling size={size} />;
        break;
      case 'warning':
        iconContent = <IconWarningFilling size={size} />;
        break;
      case 'loading':
        iconContent = <Loading size={size} borderWidth="3px" />;
        break;
      default:
        break;
    }
  }
  return <span className={iconClassNames}>{iconContent}</span>;
}
