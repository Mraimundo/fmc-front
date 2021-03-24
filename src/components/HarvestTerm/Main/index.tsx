import React from 'react';

import Filters from 'components/HarvestTerm/Filters';
import Table from 'components/HarvestTerm/Table';

import { Container, Title, TitleWrapper } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>Aprovação de Acordos de Safra</Title>
      </TitleWrapper>
      <Filters />
      <Table />
    </Container>
  );
};

export default Main;
