import React from 'react';

export function isChildrenSelected(children, keys: string[]) {
  let find = false;
  function loop(menuList) {
    if (!menuList || find) {
      return;
    }
    menuList.forEach((c) => {
      if (c && c.props && c.type && !find) {
        const { menuType } = c.type;
        const { selectable } = c.props;
        if (menuType === 'MenuItem') {
          find = keys.indexOf(c.key) !== -1;
        } else if (menuType === 'SubMenu' && selectable) {
          find = keys.indexOf(c.key) !== -1;
        }
        if (!find && c.props.children) {
          loop(c.props.children);
        }
      }
    });
  }
  loop(children);
  return find;
}
