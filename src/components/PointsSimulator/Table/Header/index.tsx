import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <tr>
        <th> </th>
        <th>Tipo/Produto</th>
        <th>Faturamento (US$)</th>
        <th>POG (US$)</th>
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
