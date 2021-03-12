import React from 'react';

import Filters from 'components/HarvestTerm/Filters';
import { Container } from './styles';

const HarvestTerm: React.FC = () => {
  return (
    <Container>
      <h1>TERMO DE SAFRA</h1>
      <Filters />
    </Container>
  );
};

export default HarvestTerm;
