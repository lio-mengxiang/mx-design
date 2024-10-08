import React, { forwardRef, useContext, useState } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { ConfigContext } from '../../ConfigProvider';
import { IconClose } from '../../Icon';
import { useClassNames } from '../hooks';
import { renderIcon } from '../../Common';
import { useStyles } from '../../hooks';
// type
import type { AlertProps } from '../interface';

type IAlertProps = AlertProps;

const defaultProps = {
  type: 'info' as const,
  showIcon: true,
  closable: false,
};

function Alert(baseProps: IAlertProps, ref) {
  // props
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<IAlertProps>(baseProps, defaultProps, componentConfig?.Alert);
  const { icon, type, style, title, content, operation, closable, showIcon, className, themeStyle, onClose } = props;

  // state
  const [isShow, setShow] = useState(true);

  // classnames
  const { iconClassNames, leftClassName, rightClassName, titleClassName, contentClassName, closeBtnClassName, itemClassNames } =
    useClassNames({ getPrefixCls, type, closable, className });

  // style
  const { wrapperStyle } = useStyles<IAlertProps>({ style, themeStyle });

  return (
    <>
      {isShow && (
        <div className={itemClassNames} style={wrapperStyle} role="alert" ref={ref}>
          {showIcon && <div className={leftClassName}>{renderIcon({ showIcon, type, icon, iconClassNames })}</div>}
          <div className={rightClassName}>
            {title && <div className={titleClassName}>{title}</div>}
            <div className={contentClassName}>
              {content}
              {operation}
            </div>
          </div>
          {closable && (
            <IconClose
              className={closeBtnClassName}
              onClick={() => {
                setShow(false);
                onClose?.();
              }}
            />
          )}
        </div>
      )}
    </>
  );
}

const AlertComponent = forwardRef(Alert);

export { AlertComponent as Alert };
