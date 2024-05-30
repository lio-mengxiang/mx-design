import React, { useContext, forwardRef, useMemo } from 'react';
import { useMergeProps, useMergeValue } from '@mx-design/hooks';
import { cs } from '@mx-design/web-utils';
import { ConfigContext } from '../../ConfigProvider';
import MenuContext, { MenuExtraContext } from './context';
import { generateInfoMap } from './utils';
import { HorizontalItem } from './horizontalItem';
import SubMenu from './subMenu';
// import { DropdownProps } from '../../Dropdown';
// type
import type { HorizontalMenuMenuProps } from './interface';

export type MenuMenuProps = HorizontalMenuMenuProps & {
  menuList: HorizontalMenuMenuProps['menuList'] & {
    keyPath?: string[];
  };
  prefixCls: string;
  isDropDown?: boolean;
  _menuInfoMap?: MenuExtraContext['menuInfoMap'];
  _isPopupVisible?: boolean;
};

const defaultProps: Partial<MenuMenuProps> = {
  selectable: true,
  ellipsis: true,
  placement: 'bottom',
};

function HorizontalMenu(baseProps: MenuMenuProps, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<MenuMenuProps>(baseProps, defaultProps, componentConfig?.HorizontalMenu);
  const {
    style,
    className,
    prefixCls: customPrefixCls,
    selectable,
    ellipsis,
    defaultSelectedKeys,
    selectedKeys: propSelectedKeys,
    onClickSubMenu,
    onClickMenuItem,
    menuList,
    popupProps,
    placement,
    isDropDown,
    disabled,
    _isPopupVisible,
    _menuInfoMap,
    ...rest
  } = props;

  const { menuInfoMap: menuInfoContextMap, selectedKeys: selectedContextKeys } = useContext(MenuContext);

  const menuInfoMap = useMemo(() => {
    if (Object.keys(menuInfoContextMap).length) return menuInfoContextMap;
    return generateInfoMap(menuList);
  }, [menuInfoContextMap, menuList]);

  const [selectedKeys, setSelectedKeys] = useMergeValue([], {
    defaultValue: defaultSelectedKeys,
    value: selectedContextKeys || propSelectedKeys,
  });

  const prefixCls = customPrefixCls || getPrefixCls('menu');

  const renderChildren = (result = []) => {
    if (!Array.isArray(menuList)) return null;
    for (let i = 0; i < menuList.length; i++) {
      const { children } = menuList[i];
      if (children && Array.isArray(children)) {
        result.push(<SubMenu {...menuList[i]} key={menuList[i].uid} _isHorizontal />);
      } else {
        result.push(<HorizontalItem {...menuList[i]} key={menuList[i].uid} />);
      }
    }

    return result;
  };

  return (
    <div role="menu" {...rest} ref={ref} style={style} className={cs(`${prefixCls}-horizontal`, className)}>
      <div className={cs(`${prefixCls}-inner`)}>
        <MenuContext.Provider
          // eslint-disable-next-line react/jsx-no-constructed-context-values
          value={{
            selectedKeys,
            popupProps,
            prefixCls,
            menuInfoMap,
            selectable,
            disabled,
            isDropDown,
            placement,
            onClickMenuItem: (key, event) => {
              selectable && setSelectedKeys(menuInfoMap[key]?.keyPath);
              onClickMenuItem?.(key, event, menuInfoMap[key]?.keyPath);
            },
            onClickSubMenu: (key) => {
              onClickSubMenu?.(key, menuInfoMap[key]?.keyPath);
            },
          }}
        >
          {renderChildren()}
        </MenuContext.Provider>
      </div>
    </div>
  );
}

const ForwardRefMenu = forwardRef<unknown, MenuMenuProps>(HorizontalMenu);

export { ForwardRefMenu as HorizontalMenu };
