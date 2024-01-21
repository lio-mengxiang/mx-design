import React, { useContext, forwardRef, useMemo } from 'react';
import { useMergeProps, useMergeValue } from '@mx-design/hooks';
import { cs } from '@mx-design/web-utils';
import { ConfigContext } from '../../ConfigProvider';
import MenuContext from './context';
import { generateInfoMap } from './utils';
import HorizontalItem from './horizontalItem';
import SubMenu from './subMenu';
// import { DropdownProps } from '../../Dropdown';
// type
import type { HorizontalMenuMenuProps } from './interface';

export type MenuMenuProps = HorizontalMenuMenuProps & {
  menuList: HorizontalMenuMenuProps['menuList'] & {
    keyPath?: string[];
  };
  prefixCls: string;
  // maxHeight?: DropdownProps['maxHeight'];
  // maxWidth?: DropdownProps['maxWidth'];
  isDropDown?: boolean;
};

const defaultProps: Partial<MenuMenuProps> = {
  selectable: true,
  ellipsis: true,
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
    ...rest
  } = props;

  const menuInfoMap = useMemo(() => generateInfoMap(menuList), [menuList]);

  const [selectedKeys, setSelectedKeys] = useMergeValue([], {
    defaultValue: defaultSelectedKeys,
    value: propSelectedKeys,
  });

  const prefixCls = customPrefixCls || getPrefixCls('menu');

  const renderChildren = (result = []) => {
    if (!Array.isArray(menuList)) return null;
    for (let i = 0; i < menuList.length; i++) {
      const { children } = menuList[i];
      if (children && Array.isArray(children)) {
        result.push(<SubMenu {...menuList[i]} key={menuList[i].uid} />);
      } else {
        result.push(<HorizontalItem {...menuList[i]} key={menuList[i].uid} />);
      }
    }

    return result;
  };

  return (
    <div role="menu" {...rest} ref={ref} style={style} className={cs(`${prefixCls}-menu`, `${prefixCls}-horizontal`, className)}>
      <MenuContext.Provider
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{
          selectedKeys,
          popupProps,
          prefixCls,
          menuInfoMap,
          selectable,
          // maxHeight,
          // maxWidth,
          disabled,
          isDropDown,
          onClickMenuItem: (key, event) => {
            selectable && setSelectedKeys([key]);
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
  );
}

const ForwardRefMenu = forwardRef<unknown, MenuMenuProps>(HorizontalMenu);

const MenuComponent = ForwardRefMenu as typeof ForwardRefMenu & {
  Item: typeof HorizontalItem;
};

MenuComponent.displayName = 'HorizontalMenu';

MenuComponent.Item = HorizontalItem;

export default MenuComponent;
