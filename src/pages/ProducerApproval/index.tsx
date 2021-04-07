import React from 'react';

import Main from 'components/ProducerApproval/Main';
import { Container, Title } from './styles';
import { FarmersProvider } from './Context';

const ProducerApproval: React.FC = () => {
  return (
    <Container>
      <Title>Cadastro de Produtores</Title>
      <FarmersProvider>
        <Main />
      </FarmersProvider>
    </Container>
  );
};

export default ProducerApproval;
