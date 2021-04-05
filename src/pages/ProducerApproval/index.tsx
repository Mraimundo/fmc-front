import React from 'react';

import Tabs from 'components/ProducerApproval/Tabs';
import Filters from 'components/ProducerApproval/Filters';
import { Container, Title } from './styles';
import { FarmersProvider } from './Context';

const ProducerApproval: React.FC = () => {
  return (
    <Container>
      <Title>Cadastro de Produtores</Title>
      <FarmersProvider>
        <Tabs />
        <Filters />
      </FarmersProvider>
    </Container>
  );
};

export default ProducerApproval;
