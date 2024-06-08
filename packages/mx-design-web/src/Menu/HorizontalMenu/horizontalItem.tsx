import React, { useContext } from 'react';
import { cs, omit } from '@mx-design/web-utils';
import MenuContext from './context';
// type
import { MenuItemProps } from './interface';

export function HorizontalItem(props: MenuItemProps) {
  const { uid, className, style, title, disabled, icon, divider, ...rest } = props;
  const { prefixCls, selectedKeys, onClickMenuItem, ellipsis } = useContext(MenuContext);
  const isSelected = selectedKeys.includes(uid);
  console.log('uid: ', uid);
  console.log('selectedKeys: ', selectedKeys);

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
        className={cs(`${prefixCls}-item`, {
          [`${prefixCls}-item-disabled`]: disabled,
          [`${prefixCls}-item-selected`]: isSelected,
        })}
        onClick={menuItemClickHandler}
        {...omit(rest, ['keyPath'])}
      >
        {icon ? <div className={`${prefixCls}-dropdown-item-icon`}>{icon}</div> : null}
        <div style={style} className={cs({ [`${prefixCls}-item-text`]: ellipsis, className })}>
          {title}
        </div>
      </div>
      {divider ? <div className={cs(`${prefixCls}-divider`)} /> : null}
    </>
  );

  return itemElement;
}
