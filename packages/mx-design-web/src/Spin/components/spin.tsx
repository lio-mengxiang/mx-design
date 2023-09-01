import React, { useContext } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { ConfigContext } from '../../ConfigProvider';
import InnerLoading from './InnerLoading';
import { useClassNames, useDebounceLoading, useStyles } from '../hooks';
// type
import type { SpinProps } from '../interface';

const defaultProps = {};

function Spin(baseProps: SpinProps, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<SpinProps>(baseProps, defaultProps, componentConfig?.Spin);
  const { style, themeStyle, className, children, loading: propLoading, size, element, tip, delay, block = true } = props;

  const [loading] = useDebounceLoading({ delay, propLoading });

  // classnames
  const { prefixCls, wrapperCls, childrenWrapperCls, loadingLayerCls, loadingLayerInnerCls, tipCls } = useClassNames({
    getPrefixCls,
    block,
    loading,
    tip,
    children,
    className,
  });
  // style
  const { wrapperStyle } = useStyles({ style, themeStyle });

  return (
    <div ref={ref} className={wrapperCls} style={wrapperStyle}>
      {children ? (
        <>
          <div className={childrenWrapperCls}>{children}</div>
          {loading && (
            <div className={loadingLayerCls} style={{ fontSize: size }}>
              <span className={loadingLayerInnerCls}>
                <InnerLoading prefixCls={prefixCls} size={size} element={element} tipCls={tipCls} tip={tip} />
              </span>
            </div>
          )}
        </>
      ) : (
        <InnerLoading prefixCls={prefixCls} size={size} element={element} tipCls={tipCls} tip={tip} />
      )}
    </div>
  );
}

const SpinComponent = React.forwardRef<unknown, SpinProps>(Spin);

SpinComponent.displayName = 'Spin';

export { SpinComponent as Spin };
