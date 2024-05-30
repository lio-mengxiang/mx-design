import React from 'react';
import { cs, omit } from '@mx-design/web-utils';
import { IconArrowBottom, IconArrowRight } from '../../Icon';

function SubMenuCard(props, ref) {
  const {
    style,
    prefixCls,
    disabled,
    visible,
    hasSelectedStatus,
    className,
    subMenuClickHandler,
    rest,
    icon,
    ellipsis,
    title,
    isDropDown,
    _isHorizontal,
    ...restProps
  } = props;

  return (
    <div
      tabIndex={-1}
      aria-haspopup
      style={style}
      ref={ref}
      className={cs(
        `${prefixCls}-item`,
        {
          [`${prefixCls}-submenu-disabled`]: disabled,
          [`${prefixCls}-selected`]: hasSelectedStatus,
        },
        className
      )}
      onClick={(e) => {
        subMenuClickHandler(e);
        restProps?.onClick(e);
      }}
      {...omit(restProps, ['onClick'])}
      {...omit(rest, ['keyPath', 'childrenMap'])}
    >
      {icon ? <div className={`${prefixCls}-dropdown-item-icon`}>{icon}</div> : null}
      <span className={cs({ [`${prefixCls}-item-text`]: ellipsis })}>{title}</span>
      {isDropDown && (
        <span className={`${prefixCls}-icon-suffix`}>
          <IconArrowRight />
        </span>
      )}
      {_isHorizontal && !isDropDown && (
        <span className={cs(`${prefixCls}-hz-icon-suffix`, { [`${prefixCls}-transformRotate180`]: visible })}>
          <IconArrowBottom />
        </span>
      )}
    </div>
  );
}
const SubMenuCardComponent = React.forwardRef(SubMenuCard);

export default SubMenuCardComponent;
