import React, { forwardRef, useContext } from 'react';
import { useMergeProps, useMergeValue } from '@mx-design/hooks';
import { ConfigContext } from '../../ConfigProvider';
import { IconClose } from '../../Icon';
import { useClassNames } from '../hooks';
// type
import type { TagProps } from '../interface';
import { useStyles } from '../../hooks';

const defaultProps: Partial<TagProps> = {
  closable: false,
  status: 'default',
  type: 'fill',
};

export const Tag = forwardRef((baseProps: TagProps, ref: React.Ref<HTMLSpanElement>) => {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<TagProps>(baseProps, defaultProps, componentConfig?.Tag);

  const {
    status,
    type,
    closable,
    visible,
    defaultVisible,
    maxWidth,
    icon,
    onClose,
    themeStyle,
    className,
    style,
    children,
    ...otherTagProps
  } = props;

  const [relVisible, setVisible] = useMergeValue(true, {
    defaultValue: defaultVisible,
    value: visible,
  });

  // style
  const { wrapperStyle } = useStyles<TagProps>({ style, themeStyle });

  // classnames
  const { wrapperCls, textCls, iconCloseCls } = useClassNames({ type, status, maxWidth, className, getPrefixCls });

  return (
    <>
      {relVisible ? (
        <span ref={ref} className={wrapperCls} style={maxWidth ? { maxWidth, ...wrapperStyle } : wrapperStyle} {...otherTagProps}>
          {icon}
          <span className={maxWidth ? textCls : undefined}>{children}</span>
          {closable && (
            <IconClose
              onClick={(e) => {
                onClose?.(e);
                setVisible(false);
              }}
              className={iconCloseCls}
            />
          )}
        </span>
      ) : null}
    </>
  );
});
