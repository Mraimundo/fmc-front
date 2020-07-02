import React, { useState, useCallback } from 'react';
import history from 'services/history';
import { useMenu } from 'context/MenuContext';
import { MenuItem } from 'services/menu/interfaces';
import { Container } from './styles';

interface Props {
  menu: MenuItem;
}

const Item: React.FC<Props> = ({ menu, children }) => {
  const [opened, setOpened] = useState(false);
  const { setMenuSelected } = useMenu();

  const handleMenuClick = useCallback(
    (menuItem: MenuItem) => {
      if (menuItem.type === 'menu') {
        setOpened(o => !o);
        return;
      }
      setMenuSelected(menuItem);
      history.push(menuItem.address);
    },
    [setMenuSelected],
  );

  return (
    <Container opened={opened} onClick={() => handleMenuClick(menu)}>
      <span>{menu.title}</span>
      {children}
    </Container>
  );
};

export default Item;
