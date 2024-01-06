import React, { useContext } from 'react';
import { cs, omit } from '@mx-design/web-utils';
import MenuContext from './context';
import { IconArrowRight } from '../../Icon';
import { MenuItemProps } from './interface';
import { Dropdown } from '../../Dropdown';

function SubMenuPop(props: MenuItemProps) {
  const { uid, className, style, title, disabled, icon, children, divider, ...rest } = props;

  const {
    prefixCls,
    selectedKeys = [],
    menuInfoMap,
    popupProps,
    onClickSubMenu,
    onClickMenuItem,
    selectable,
    ellipsis,
  } = useContext(MenuContext);

  const hasSelectedStatus = menuInfoMap[selectedKeys[0]]?.keyPath.indexOf(props.uid as string) > 1;

  const subMenuClickHandler = (event) => {
    onClickSubMenu(uid, event);
  };

  return (
    <>
      <Dropdown
        trigger="hover"
        droplist={children}
        disabled={disabled}
        onClick={onClickMenuItem}
        popupProps={{
          placement: 'right-start',
          overlayClassName: cs(`${prefixCls}-popup`, popupProps?.overlayClassName),
          ...omit(popupProps, ['className', 'keyPath', 'childrenMap', 'isCloseClickAway']),
        }}
      >
        <div
          tabIndex={-1}
          aria-haspopup
          style={style}
          className={cs(
            `${prefixCls}-item`,
            {
              [`${prefixCls}-submenu-disabled`]: disabled,
              [`${prefixCls}-selected`]: hasSelectedStatus,
            },
            className
          )}
          onClick={subMenuClickHandler}
          {...omit(rest, ['keyPath', 'childrenMap'])}
        >
          {icon ? <div className={`${prefixCls}-dropdown-item-icon`}>{icon}</div> : null}
          <span className={cs({ [`${prefixCls}-item-text`]: ellipsis })}>{title}</span>
          <span className={`${prefixCls}-icon-suffix`}>
            <IconArrowRight />
          </span>
        </div>
      </Dropdown>
      {divider ? <div className={cs(`${prefixCls}-divider`)} /> : null}
    </>
  );
}

export default SubMenuPop;
