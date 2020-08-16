import React from 'react';
import isEmpty from 'lodash.isempty';

import useDimensions from 'hooks/use-dimensions';
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
  const { ref, width } = useDimensions<HTMLUListElement>();

  return (
    <MenuList subMenu={subMenu} width={width} ref={ref}>
      {items.map((item: TMenuItem) => (
        <MenuItem
          key={item.label}
          selectedMenu={isSelectedMenu(item, selectedMenu)}
        >
          <Linker
            menuItem={item}
            subMenu={subMenu && !isEmpty(item.children)}
          />
          {!isEmpty(item.children) && (
            <Menu items={item.children || []} subMenu />
          )}
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default Menu;
