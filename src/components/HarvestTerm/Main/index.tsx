import React from 'react';

import Filters from 'components/HarvestTerm/Filters';
import Table from 'components/HarvestTerm/Table';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <h1>TERMO DE SAFRA</h1>
      <Filters />
      <Table />
    </Container>
  );
};

export default Main;
