import React from 'react';
import ExtractHeader from 'components/Extract/ExtractHeader';
import { Container, Content, PageTitle } from './styles';

const Extract: React.FC = () => {
  return (
    <Container>
      <Content>
        <PageTitle>Extrato de Pontos</PageTitle>
        <ExtractHeader />
      </Content>
    </Container>
  );
};

export default Extract;
