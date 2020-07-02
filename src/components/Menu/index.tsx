import React, { useCallback } from 'react';
import { MenuItem } from 'services/menu/interfaces';
import { useMenu } from 'context/MenuContext';
import Item from './Item';

import { Container } from './styles';

const Menu: React.FC = () => {
  const { menus } = useMenu();

  const buildMenuItem = useCallback((menu: MenuItem): React.ReactNode => {
    return menu.type === 'menu' ? (
      <Item menu={menu} key={`${menu.type}-${menu.address}`}>
        <Container>{menu.children.map(item => buildMenuItem(item))} </Container>
      </Item>
    ) : (
      <Item menu={menu} key={`${menu.type}-${menu.address}`} />
    );
  }, []);

  const build = useCallback(
    (menuList: MenuItem[]) => {
      return <Container>{menuList.map(item => buildMenuItem(item))}</Container>;
    },
    [buildMenuItem],
  );

  return menus && menus.length > 0 ? (
    build(menus)
  ) : (
    <h1>Nenhum menu configurado</h1>
  );
};

export default Menu;
