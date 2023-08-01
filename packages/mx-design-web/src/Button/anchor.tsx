import React, { forwardRef, ReactNode } from 'react';
import type { ButtonProps } from './interface';

interface AnchorProps {
  anchorProps: ButtonProps['anchorProps'];
  href: ButtonProps['href'];
  disabled: ButtonProps['disabled'];
  style: ButtonProps['style'];
  classNames: string;
  handleClick: (e: React.MouseEvent<Element, MouseEvent>) => void;
  InnerContent: ReactNode;
  rest: Record<string, any>;
}

const getAnchorProps = function (anchorProps, disabled, href) {
  const _anchorProps = { ...anchorProps };
  if (disabled) {
    delete _anchorProps.href;
  } else {
    _anchorProps.href = href;
  }
  return _anchorProps;
};

function Anchor(props: AnchorProps, ref) {
  const { anchorProps, href, disabled, style, classNames, InnerContent, handleClick, rest } = props;

  return (
    <a ref={ref} {...rest} {...getAnchorProps(anchorProps, disabled, href)} onClick={handleClick}>
      {InnerContent}
    </a>
  );
}

const AComponent = forwardRef<unknown, AnchorProps>(Anchor);

export default AComponent;
