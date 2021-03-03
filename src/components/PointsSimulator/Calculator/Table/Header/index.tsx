import React from 'react';

import { Tab } from '../../Header';

import { Container } from './styles';

interface Props {
  tabSelected: Tab;
}

const Header: React.FC<Props> = ({ tabSelected }) => {
  return (
    <Container>
      <div> </div>
      <div>Segmento/Produto</div>
      <div>
        Faturamento ({tabSelected === Tab.enhancerProductsTab ? 'Kg/L' : 'US$'})
      </div>
      <div>
        POG ({tabSelected === Tab.enhancerProductsTab ? 'Kg/L' : 'US$'})
      </div>
      <div>Estoque</div>
      <div>Valor Unitário (US$)</div>
      <div>Faturamento (Kg/L)</div>
      <div>Faturamento (US$)</div>
      <div>POG (Kg/L)</div>
    </Container>
  );
};

export default Header;
