import React, { forwardRef, useImperativeHandle, useContext } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { ConfigContext } from '../ConfigProvider';
import { useStore } from './store';
// type
import type { AffixProps } from './interface';

export interface AffixRef {
  handleScroll: () => void;
}

const defaultProps: Partial<AffixProps> = { container: () => window, offsetBottom: 0, offsetTop: 0 };

function Affix(baseProps: AffixProps, ref) {
  // context
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  // props
  const props = useMergeProps<AffixProps>(baseProps, defaultProps, componentConfig?.Affix);
  const { children, zIndex, container, offsetBottom, offsetTop, className, style, onFixedChange } = props;
  // data store
  const { handleScroll, affixWrapRef, affixRef } = useStore({ getPrefixCls, zIndex, container, offsetBottom, offsetTop, onFixedChange });

  // export handleScroll
  useImperativeHandle(ref, () => ({
    handleScroll,
  }));

  return (
    <div ref={affixWrapRef} className={className} style={style}>
      <div ref={affixRef}>{children}</div>
    </div>
  );
}

const AffixComponent = forwardRef<unknown, AffixProps>(Affix);

AffixComponent.displayName = 'Affix';

export default AffixComponent;
