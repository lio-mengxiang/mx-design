import React, { useContext } from 'react';
import { IconClose } from '../Icon';
import { useCardClassNames, useStyles } from './hooks';
import { ConfigContext } from '../ConfigProvider';
import { renderIcon } from '../Common/renderIcon';
// type
import type { NotificationCardProps } from './interface';

function NotificationCard(props: Omit<NotificationCardProps, 'position'>) {
  const { icon, type, style, themeStyle, title, content, btn, closable, showIcon, className, remove, id, onClose } = props;

  const { getPrefixCls } = useContext(ConfigContext);
  // classnames
  const {
    iconClassNames,
    leftClassName,
    rightClassName,
    titleClassName,
    contentClassName,
    btnWrapperClassName,
    closeBtnClassName,
    itemClassNames,
  } = useCardClassNames({ getPrefixCls, type, closable, className });

  // style
  const { wrapperStyle } = useStyles({ style, themeStyle });

  return (
    <div className={itemClassNames} style={wrapperStyle} role="alert">
      {showIcon && <div className={leftClassName}>{renderIcon({ showIcon, type, icon, iconClassNames, size: '24px' })}</div>}
      <div className={rightClassName}>
        {title && <div className={titleClassName}>{title}</div>}
        <div className={contentClassName}>{content}</div>
        {btn && <div className={btnWrapperClassName}>{btn}</div>}
      </div>
      {closable && (
        <IconClose
          className={closeBtnClassName}
          onClick={() => {
            onClose?.();
            remove?.(id);
          }}
        />
      )}
    </div>
  );
}

NotificationCard.displayName = 'NotificationCardComponent';

export default NotificationCard;
