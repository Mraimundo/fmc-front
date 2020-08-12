import React from 'react';

import { List, Item } from './styles';

const PerformancePotentialTable: React.FC = () => {
  return (
    <List>
      <Item>
        <span>Potencial (US$)</span>
        <span>US$ 0.00</span>
      </Item>
      <Item>
        <span>Rebate</span>
        <span>R$ 0</span>
      </Item>
      <Item>
        <span>Premiação vendedores (R$)</span>
        <span>R$ 0</span>
      </Item>
    </List>
  );
};

export default PerformancePotentialTable;
