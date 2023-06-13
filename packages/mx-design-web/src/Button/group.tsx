import React, { useContext } from 'react';
import { cs } from '@mx-design/web-utils';
import { ConfigContext } from '../ConfigProvider';
import type { ButtonGroupProps } from './interface';

function Group(props: ButtonGroupProps, ref) {
  const { className, style, children, ...rest } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('btn-group');
  const classNames = cs(prefixCls, className);

  return (
    <div ref={ref} className={classNames} style={style} {...rest}>
      {children}
    </div>
  );
}

const GroupComponent = React.forwardRef<unknown, ButtonGroupProps>(Group);

GroupComponent.displayName = 'ButtonGroup';

export default GroupComponent;

export { ButtonGroupProps };
