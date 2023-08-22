import React, { forwardRef, useRef, useImperativeHandle, useContext, PropsWithChildren } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { Popup } from '../../Popup';
import { ConfigContext } from '../../ConfigProvider';
import { useClassNames } from '../hooks';
// type
import type { TooltipProps } from '../interface';

export const defaultProps: Partial<TooltipProps> = {
  placement: 'top',
  showArrow: true,
};

const NcTooltip = forwardRef((baseProps: PropsWithChildren<TooltipProps>, ref) => {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<PropsWithChildren<TooltipProps>>(baseProps, defaultProps, componentConfig?.Tooltip);
  const { showArrow, overlayClassName, children, placement, ...restProps } = props;

  const popupRef = useRef(null);
  const { toolTipCls } = useClassNames({ getPrefixCls, overlayClassName });

  useImperativeHandle(ref, () => ({
    ...((popupRef.current || {}) as any),
  }));

  return (
    <Popup ref={popupRef} showArrow={showArrow} overlayClassName={toolTipCls} placement={placement} {...restProps}>
      {children}
    </Popup>
  );
});

NcTooltip.displayName = 'Tooltip';

export { NcTooltip };
