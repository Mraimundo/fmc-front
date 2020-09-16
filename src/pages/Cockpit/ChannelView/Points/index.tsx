import React from 'react';
import { Points as IPoints } from 'services/cockpit/interfaces/channel';

import { Container, List, Item, Title, Value } from './styles';

interface Props {
  points: IPoints;
}

const Points: React.FC<Props> = ({ points }) => {
  return (
    <Container>
      <h3>Pontos</h3>
      <List>
        <Item>
          <Title>Saldo do canal no Marketplace:</Title>
          <Value>{points.formattedMarketplaceBalance}</Value>
        </Item>

        <Item>
          <Title>Total de pontos distribuidos para os vendedores:</Title>
          <Value>{points.formattedSellerDistributedPoints}</Value>
        </Item>

        <Item>
          <Title>Solicitação de Retorno Financeiro</Title>
          <Value>{points.formattedRebate}</Value>
        </Item>

        <Item>
          <Title>Total de pontos ganhos pelo canal</Title>
          <Value>{points.formattedChannelPoints}</Value>
        </Item>

        <Item>
          <Title>Ações Compartilhadas FMC</Title>
          <Value>{points.formattedFmcSharedActions}</Value>
        </Item>
      </List>
    </Container>
  );
};

export default Points;
