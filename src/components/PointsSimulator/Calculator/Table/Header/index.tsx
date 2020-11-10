import React from 'react';

import { Tab } from '../../Header';

import { Container } from './styles';

interface Props {
  tabSelected: Tab;
}

const Header: React.FC<Props> = ({ tabSelected }) => {
  return (
    <Container>
      <tr>
        <th> </th>
        <th>Tipo/Produto</th>
        <th>
          Faturamento (
          {tabSelected === Tab.enhancerProductsTab ? 'Kg/L' : 'US$'})
        </th>
        <th>
          POG ({tabSelected === Tab.enhancerProductsTab ? 'Kg/L' : 'US$'})
        </th>
        <th>Estoque</th>
        <th>Valor unitário (US$)</th>
        <th>Faturamento (Kg/L)</th>
        <th>Faturamento (US$)</th>
        <th>POG (Kg/L)</th>
      </tr>
    </Container>
  );
};

export default Header;
