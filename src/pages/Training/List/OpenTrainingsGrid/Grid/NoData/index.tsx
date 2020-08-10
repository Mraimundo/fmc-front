import React from 'react';

import notFound from 'assets/images/training/not-found.jpg';
import { Container } from './styles';

const NoData: React.FC = () => {
  return (
    <>
      <div />
      <Container>
        <img src={notFound} alt="Não encontrado" />
        <h3>Nenhum treinamento encontrado</h3>
      </Container>
    </>
  );
};

export default NoData;
