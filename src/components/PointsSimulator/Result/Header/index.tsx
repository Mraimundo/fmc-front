import React from 'react';

import MiniBox from '../MiniBox';

import { Container } from './styles';

type Tab = 'tab1' | 'tab2';

const Header: React.FC = () => {
  return (
    <Container>
      <h3>Simulador</h3>
      <div>
        <h3>Resultado da simulação</h3>
        <span>(simulado em 20/10/2020 com parciais de 19/10/2020)</span>
        <MiniBox title="Agroamazônia" text="Safra 20/21" />
      </div>
    </Container>
  );
};

export default Header;
