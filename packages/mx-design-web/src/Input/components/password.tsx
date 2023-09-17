import React, { useContext } from 'react';
import { useMergeValue } from '@mx-design/hooks';
import { cs, omit } from '@mx-design/web-utils';
import { ConfigContext } from '../../ConfigProvider';
import { Input } from './input';
import { IconView, IconViewOff } from '../../Icon';
// type
import { InputPasswordProps, RefInputType } from '../interface';

export const Password = React.forwardRef<RefInputType, InputPasswordProps>((props: InputPasswordProps, ref) => {
  const { getPrefixCls } = useContext(ConfigContext);

  const { className, visibilityToggle = true, onVisibilityChange, ...rest } = props;

  const prefixCls = getPrefixCls('input-password');

  const [visibility, setVisibility] = useMergeValue(false, {
    defaultValue: props.defaultVisibility,
    value: props.visibility,
  });

  const classNames = cs(
    prefixCls,
    {
      [`${prefixCls}-visibility`]: visibilityToggle,
    },
    className
  );

  const onClickVisibility = (v: boolean) => {
    if (!('visibility' in props)) {
      setVisibility(v);
    }
    onVisibilityChange?.(v);
  };

  let icon = props.suffix;

  const handleClickVisibility = () => {
    onClickVisibility(!visibility);
  };

  if (visibilityToggle) {
    const IconProps = {
      onClick: handleClickVisibility,
      // 预防focus丢失
      onMouseDown: (e) => e.preventDefault(),
      onMouseUp: (e) => e.preventDefault(),
    };

    if (props.suffix) {
      icon = <span {...IconProps}>{props.suffix}</span>;
    } else {
      const IconComponent = visibility ? IconView : IconViewOff;

      icon = (
        <IconComponent
          {...IconProps}
          {...{
            focusable: undefined,
            'aria-hidden': undefined,
            tabIndex: 0,
            className: `${prefixCls}-visibility-icon`,
          }}
        />
      );
    }
  }

  return (
    <Input
      {...omit(rest, ['visibility', 'defaultVisibility'])}
      type={visibility ? 'text' : 'password'}
      className={classNames}
      ref={ref}
      suffix={icon}
    />
  );
});
