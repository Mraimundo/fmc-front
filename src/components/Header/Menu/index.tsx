import React from 'react';

import { MenuItem as TMenuItem } from 'state/modules/header/types';
import { isSelectedMenu } from 'state/modules/header/utils';
import Linker from './Linker';
import { MenuList, MenuItem } from './styles';

interface MenuProps {
  items: TMenuItem[];
  subMenu?: boolean;
  selectedMenu?: TMenuItem | null;
}
const Menu: React.FC<MenuProps> = ({
  items,
  subMenu = false,
  selectedMenu,
}) => {
  return (
    <MenuList subMenu={subMenu}>
      {items.map((item: TMenuItem) => (
        <MenuItem
          key={item.label}
          selectedMenu={isSelectedMenu(item, selectedMenu)}
        >
          <Linker menuItem={item} />
          {!!item.children && <Menu items={item.children} subMenu />}
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default Menu;
