import React from 'react';

import { MenuItem as TMenuItem } from 'state/modules/header/types';
import Linker from './Linker';
import { MenuList, MenuItem } from './styles';

interface MenuProps {
  items: TMenuItem[];
  subMenu?: boolean;
}
const Menu: React.FC<MenuProps> = ({ items, subMenu = false }) => {
  return (
    <MenuList subMenu={subMenu}>
      {items.map((item: TMenuItem) => (
        <MenuItem key={item.label}>
          <Linker menuItem={item} />
          {!!item.children && <Menu items={item.children} subMenu />}
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default Menu;
