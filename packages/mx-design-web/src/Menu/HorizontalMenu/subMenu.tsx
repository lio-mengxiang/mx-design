import React, { useContext } from 'react';
import { cs, omit } from '@mx-design/web-utils';
import MenuContext from './context';
import { MenuItemProps } from './interface';
import { Dropdown } from '../../Dropdown';
import SubMenuCard from './subMenuCard';

function SubMenuPop(props: MenuItemProps) {
  const { uid, className, style, title, disabled, icon, children, divider, _isHorizontal, ...rest } = props;

  const {
    prefixCls,
    selectedKeys = [],
    menuInfoMap,
    popupProps,
    onClickSubMenu,
    onClickMenuItem,
    selectable,
    ellipsis,
    isDropDown,
    placement,
  } = useContext(MenuContext);

  const hasSelectedStatus = selectedKeys.includes(props.uid as string);

  const subMenuClickHandler = (event) => {
    onClickSubMenu(uid, event);
  };

  return (
    <>
      <Dropdown
        trigger="hover"
        droplist={children}
        disabled={disabled}
        _menuInfoMap={menuInfoMap}
        onClick={onClickMenuItem}
        addVisibleStatus
        popupProps={{
          placement,
          overlayClassName: cs(`${prefixCls}-popup`, popupProps?.overlayClassName),
          ...omit(popupProps, ['className', 'keyPath', 'childrenMap', 'isCloseClickAway']),
        }}
      >
        <SubMenuCard
          style={style}
          prefixCls={prefixCls}
          hasSelectedStatus={hasSelectedStatus}
          className={className}
          subMenuClickHandler={subMenuClickHandler}
          rest={rest}
          icon={icon}
          ellipsis={ellipsis}
          title={title}
          isDropDown={isDropDown}
          _isHorizontal={_isHorizontal}
        />
      </Dropdown>
      {divider ? <div className={cs(`${prefixCls}-divider`)} /> : null}
    </>
  );
}

export default SubMenuPop;
