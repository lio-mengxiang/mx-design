import React, { useContext } from 'react';
import { cs, omit } from '@mx-design/web-utils';
import MenuContext from './context';
// type
import { MenuItemProps } from './interface';

function HorizontalItem(props: MenuItemProps) {
  const { uid, className, style, title, disabled, icon, divider, ...rest } = props;
  const { prefixCls, selectedKeys, onClickMenuItem, ellipsis, menuInfoMap } = useContext(MenuContext);
  const isSelected = selectedKeys && ~selectedKeys.indexOf(uid);

  const menuItemClickHandler = (event) => {
    if (!disabled) {
      onClickMenuItem(uid, event);
      rest?.onClick?.(event);
    }
  };

  const itemElement = (
    <>
      <div
        tabIndex={-1}
        role="menuitem"
        data-key={uid}
        style={style}
        className={cs(
          `${prefixCls}-item`,
          {
            [`${prefixCls}-item-disabled`]: disabled,
            [`${prefixCls}-item-selected`]: isSelected,
          },
          className
        )}
        onClick={menuItemClickHandler}
        {...omit(rest, ['keyPath'])}
      >
        {icon ? <div className={`${prefixCls}-dropdown-item-icon`}>{icon}</div> : null}
        <span className={cs({ [`${prefixCls}-item-text`]: ellipsis })}>{title}</span>
      </div>
      {divider ? <div className={cs(`${prefixCls}-item`)} /> : null}
    </>
  );

  return itemElement;
}

HorizontalItem.displayName = 'HorizontalItem';

HorizontalItem.menuType = 'HorizontalItem';

export default HorizontalItem;
