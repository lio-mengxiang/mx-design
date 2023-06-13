import { forwardRef, useEffect, useMemo, useImperativeHandle, useContext } from 'react';
import { createPortal } from 'react-dom';
import type { PortalProps } from './interface';
import { ConfigContext } from '../ConfigProvider';
import { getAttach } from './utils/getAttach';

const Portal = forwardRef((props: PortalProps, ref) => {
  const { attach, children } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const classPrefix = getPrefixCls('portal');
  const container = useMemo(() => {
    const el = document.createElement('div');
    el.className = `${classPrefix}-wrapper`;
    return el;
  }, [classPrefix]);

  useEffect(() => {
    const parentElement = getAttach(attach);
    parentElement?.appendChild?.(container);

    return () => {
      parentElement?.removeChild?.(container);
    };
  }, [container, attach]);

  useImperativeHandle(ref, () => container);

  return createPortal(children, container);
});

Portal.displayName = 'Portal';
Portal.defaultProps = {
  attach: document.body,
};

export default Portal;
