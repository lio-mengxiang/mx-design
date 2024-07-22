import React, { forwardRef, useContext, useImperativeHandle } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { Affix } from '../../Affix';
import { ConfigContext } from '../../ConfigProvider';
import AnchorContext from '../context';
import { addLink, createNestedLink } from '../utils';
import { useClassNames, useStyles } from '../hooks';
import { useStore } from '../store';
import { Link } from './link';
// type
import { AnchorProps } from '../interface';

type AnchorPropsWithChildren = React.PropsWithChildren<AnchorProps>;

const defaultProps: Partial<AnchorProps> = {
  offset: 5,
  affix: true,
  items: [],
};

function Anchor(baseProps: AnchorPropsWithChildren, ref) {
  // props
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<AnchorPropsWithChildren>(baseProps, defaultProps, componentConfig?.Anchor);
  const {
    className,
    style,
    themeStyle,
    scrollContainer: propScrollContainer,
    lineless,
    affix,
    affixStyle,
    offsetBottom,
    offsetTop,
    offset,
    children,
    onSelect,
    onChange,
    items,
    ...rest
  } = props;

  // classnames
  const { wrapperCls, lineSliderCls, listCls } = useClassNames({ getPrefixCls, lineless, className });
  // style
  const { wrapperStyle } = useStyles({ style, themeStyle });

  // store
  const { onScroll, currentLink, onLinkClick, wrapperRef, sliderLineRef, scrollContainer, linkMap } = useStore({
    propScrollContainer,
    onSelect,
    onChange,
    offset,
    lineless,
  });

  useImperativeHandle(
    ref,
    () => ({
      onScroll,
      onLinkClick,
    }),
    [onLinkClick, onScroll]
  );

  const content = (
    <div className={wrapperCls} style={wrapperStyle} ref={wrapperRef} {...rest}>
      {!lineless && currentLink && <div className={lineSliderCls} ref={sliderLineRef} />}
      <AnchorContext.Provider
        value={{
          currentLink,
          linkMap,
          onLinkClick,
        }}
      >
        <div className={listCls}>{createNestedLink(items)}</div>
      </AnchorContext.Provider>
    </div>
  );

  return affix ? (
    <Affix offsetTop={offsetTop} offsetBottom={offsetBottom} style={affixStyle} container={() => scrollContainer.current}>
      {content}
    </Affix>
  ) : (
    content
  );
}

const ForwardRefAnchor = forwardRef<unknown, AnchorPropsWithChildren>(Anchor);

const AnchorComponent = ForwardRefAnchor as typeof ForwardRefAnchor & {
  Link: typeof Link;
};

AnchorComponent.Link = Link;

export { AnchorComponent as Anchor };
