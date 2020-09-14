import React from 'react';

import { Container, List, Item, Title, Value } from './styles';

const Points: React.FC = () => {
  return (
    <Container>
      <h3>Pontos</h3>
      <List>
        <Item>
          <Title>Saldo do canal no Marketplace:</Title>
          <Value>30.000</Value>
        </Item>

        <Item>
          <Title>Total de pontos distribuidos para os vendedores:</Title>
          <Value>30.000</Value>
        </Item>

        <Item>
          <Title>Solicitação de Retorno Financeiro</Title>
          <Value>30.000</Value>
        </Item>

        <Item>
          <Title>Total de pontos ganhos pelo canal</Title>
          <Value>30.000</Value>
        </Item>

        <Item>
          <Title>Ações Compartilhadas FMC</Title>
          <Value>120.000</Value>
        </Item>
      </List>
    </Container>
  );
};

export default Points;
