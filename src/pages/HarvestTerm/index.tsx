import React, { useEffect } from 'react';

import Filters from 'components/HarvestTerm/Filters';
import { getHarvests } from 'services/harvest-term';
import { Container } from './styles';

const HarvestTerm: React.FC = () => {
  useEffect(() => {
    getHarvests('164.050.680-21');
  }, []);

  return (
    <Container>
      <h1>TERMO DE SAFRA</h1>
      <Filters />
    </Container>
  );
};

export default HarvestTerm;
