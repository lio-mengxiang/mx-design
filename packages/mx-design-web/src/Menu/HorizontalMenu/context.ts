import { createContext } from 'react';
import type { HorizontalMenuMenuProps, MenuItemProps } from './interface';
import type { MenuMenuProps } from './horizontalMenu';
import { PopupProps } from '../../Popup';

const HorizontalMenuContext = createContext<Pick<HorizontalMenuMenuProps, 'selectedKeys' | 'popupProps'> & MenuExtraContext>({
  menuInfoMap: {},
});

export default HorizontalMenuContext;

export interface MenuExtraContext {
  prefixCls?: string;
  menuInfoMap: {
    [key: string]: MenuItemProps[] & {
      keyPath?: string[];
    };
  };
  selectable?: HorizontalMenuMenuProps['selectable'];
  // maxHeight?: MenuMenuProps['maxHeight'];
  // maxWidth?: MenuMenuProps['maxWidth'];
  ellipsis?: boolean;
  isDropDown?: MenuMenuProps['isDropDown'];
  disabled?: HorizontalMenuMenuProps['disabled'];
  onClickMenuItem?: (key: string | number, event) => void;
  onClickSubMenu?: (key: string | number, path: string[]) => void;
  placement?: PopupProps['placement'];
}
