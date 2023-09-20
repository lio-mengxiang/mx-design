import React from 'react';
import { useMergeValue } from '@mx-design/hooks';
import { IconView, IconViewOff } from '../../Icon';
// types
import type { InputPasswordProps } from '../interface';

export function usePasswordStore(props: InputPasswordProps & { prefixCls: string }) {
  const { onVisibilityChange, visibilityToggle = true, prefixCls, disabled } = props;

  const [visibility, setVisibility] = useMergeValue(false, {
    defaultValue: props.defaultVisibility,
    value: props.visibility,
  });

  const onClickVisibility = (v: boolean) => {
    if (!('visibility' in props)) {
      setVisibility(v);
    }
    onVisibilityChange?.(v);
  };

  let icon = props.suffix;

  const handleClickVisibility = () => {
    if (disabled) return;
    onClickVisibility(!visibility);
  };

  if (visibilityToggle) {
    const IconProps = {
      onClick: handleClickVisibility,
      // Prevent loss of focus
      onMouseUp: (e) => e.preventDefault(),
    };

    if (props.suffix) {
      icon = (
        <span {...IconProps} className={`${prefixCls}-icon-wrapper`}>
          {props.suffix}
        </span>
      );
    } else {
      const IconComponent = visibility ? IconView : IconViewOff;

      icon = <IconComponent {...IconProps} tabIndex={-1} />;
    }
  }
  return {
    visibility,
    icon,
  };
}
