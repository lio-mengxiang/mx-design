import React, { forwardRef, ReactNode } from 'react';
import type { ButtonProps } from '../interface';

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

function BtnAnchor(props: AnchorProps, ref) {
  const { anchorProps, href, disabled, style, classNames, InnerContent, handleClick, rest } = props;

  return (
    <a ref={ref} {...rest} {...getAnchorProps(anchorProps, disabled, href)} onClick={handleClick} style={style} className={classNames}>
      {InnerContent}
    </a>
  );
}

const AnchorComponent = forwardRef<unknown, AnchorProps>(BtnAnchor);

export { AnchorComponent as BtnAnchor };
