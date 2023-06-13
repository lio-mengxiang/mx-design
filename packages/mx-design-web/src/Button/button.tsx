import React, { useContext, useRef, forwardRef, ReactNode, MouseEventHandler } from 'react';
import Group from './group';
import Anchor from './anchor';
import { ConfigContext } from '../ConfigProvider';
import { useClassNames } from './hooks';
import { useMergeProps } from '@mx-design/hooks';
// type
import type { ButtonProps } from './interface';
import { Loading } from '../Loading';

const defaultProps: Partial<ButtonProps> = {
  htmlType: 'button',
  type: 'brand',
};

function Button(baseProps: ButtonProps, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps(baseProps, defaultProps, componentConfig?.Button);
  const {
    style,
    className,
    children,
    htmlType,
    type,
    status,
    href,
    anchorProps,
    disabled,
    loading,
    icon,
    iconOnly,
    onClick,
    long,
    ...rest
  } = props;

  const iconNode = loading ? <Loading size="14px" borderWidth="2px" /> : icon;
  const innerButtonRef = useRef();
  const buttonRef = ref || innerButtonRef;
  const { wrapperCls } = useClassNames({
    long,
    status,
    loading,
    children,
    iconOnly,
    disabled,
    className,
    iconNode,
    type,
    getPrefixCls,
  });

  const handleClick: MouseEventHandler = (event): void => {
    if (loading) {
      event?.preventDefault?.();
      return;
    }
    onClick?.(event);
  };

  const InnerContent: ReactNode = (
    <>
      {iconNode}
      {React.Children.map(children, (child) => (typeof child === 'string' ? <span>{child}</span> : child))}
    </>
  );

  const render = function () {
    if (href) {
      return (
        <Anchor
          classNames={wrapperCls}
          InnerContent={InnerContent}
          handleClick={handleClick}
          rest={rest}
          anchorProps={anchorProps}
          href={href}
          disabled={disabled}
          style={style}
        />
      );
    }
    return (
      <button {...rest} ref={buttonRef} style={style} className={wrapperCls} type={htmlType} disabled={disabled} onClick={handleClick}>
        {InnerContent}
      </button>
    );
  };

  return render();
}

const ForwardRefButton = forwardRef<unknown, ButtonProps>(Button);

const ButtonComponent = ForwardRefButton as typeof ForwardRefButton & {
  Group: typeof Group;
};

ButtonComponent.Group = Group;

ButtonComponent.displayName = 'Button';

export default ButtonComponent;
