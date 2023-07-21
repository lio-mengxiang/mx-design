import { log } from '@mx-design/web-utils';
// type
import type { MenuMenuProps } from '../horizontalMenu';

export function generateInfoMap(
  menuList,
  keyPath = [],
  deep = 0,
  result: {
    [key: string]: MenuMenuProps['menuList'];
  } = {}
) {
  if (!Array.isArray(menuList)) {
    log.error('menuList and children must be Array');
    return result;
  }

  for (let i = 0; i < menuList.length; i++) {
    const currItem = menuList[i];

    if (!currItem.uid) currItem.uid = `${deep}-${i}`;

    const _keyPath = [currItem.uid, ...keyPath];
    currItem.keyPath = _keyPath;

    if (Array.isArray(currItem.children)) {
      currItem.childrenMap = generateInfoMap(currItem.children, _keyPath, deep + 1, result);
    } else {
      result[currItem.uid] = currItem;
    }
  }

  return result;
}
