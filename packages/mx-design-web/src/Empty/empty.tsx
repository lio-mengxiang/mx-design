import React, { memo, useContext, forwardRef } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { ConfigContext } from '../ConfigProvider/configProvider';
import { emptyImage, getDesDefault } from './utils';
import { useClassNames } from './hooks';
import { useLocale } from '../locale/useLocal/useLocal';
import { EMPTY_NAMESPACE } from './constants';
// type
import type { EmptyProps } from './interface';

const defaultProps = {};

function Empty(baseProps: EmptyProps, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<EmptyProps>(baseProps, defaultProps, componentConfig?.Empty);

  const { style, className, description, icon, imgSrc } = props;

  const [locale] = useLocale({ namespace: EMPTY_NAMESPACE });
  const { containerCls, wrapperCls, imageCls, descriptionCls } = useClassNames({ getPrefixCls, className });
  const alt = getDesDefault(description);

  return (
    <div ref={ref} className={containerCls} style={style}>
      <div className={wrapperCls}>
        <div className={imageCls}>{emptyImage({ imgSrc, alt, icon })}</div>
        <div className={descriptionCls}>{description || locale.NO_DATA}</div>
      </div>
    </div>
  );
}

const EmptyComponent = forwardRef(Empty);

EmptyComponent.displayName = EMPTY_NAMESPACE;

export default memo(EmptyComponent);
