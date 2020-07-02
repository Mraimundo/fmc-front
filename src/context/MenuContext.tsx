import React, { createContext, useState, useContext, useEffect } from 'react';
import getMenus from 'services/menu/getMenuList';
import { MenuItem } from 'services/menu/interfaces';

interface MenuContextState {
  menus: MenuItem[];
  menuSelected: MenuItem | null;
  setMenuSelected(menuItem: MenuItem | null): void;
}

const MenuContext = createContext<MenuContextState>({} as MenuContextState);

export const MenuProvider: React.FC = ({ children }) => {
  const [menus, setMenus] = useState<MenuItem[]>([]);
  const [menuSelected, setMenuSelected] = useState<MenuItem | null>(null);

  useEffect(() => {
    getMenus().then(data => setMenus(data));
  }, []);

  return (
    <MenuContext.Provider
      value={{
        menus,
        menuSelected,
        setMenuSelected,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = (): MenuContextState => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within an MenuProvider');
  }
  return context;
};
