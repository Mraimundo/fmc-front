import React from 'react';
import { Product as IProduct } from 'services/campaigns/getCampaign';

import { Container, Separator, Row, Box } from './styles';

interface Props {
  data: IProduct[];
}

const Product: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <h3>Produtos Participantes</h3>
      <Separator />
      {data.map(item => (
        <Row key={`item-${item.id}`}>
          <Box>{item.title}</Box>
          {item.volume && (
            <>
              <span>
                <span>Volume</span>
                {item.volume}
              </span>
              <span>
                <span>Parcial</span>
                {item.partialVolume}
              </span>
              <span>
                <span>Porcentagem Realizada</span>
                {item.partialVolumePercentage}
              </span>
            </>
          )}
          {item.sellIn && (
            <>
              <span>
                <span>Faturamento</span>
                {item.sellIn}
              </span>
              <span>
                <span>Parcial</span>
                {item.partialSellIn}
              </span>
              <span>
                <span>Porcentagem Realizada</span>
                {item.partialSellInPercentage}
              </span>
            </>
          )}
          {item.sellOut && (
            <>
              <span>
                <span>POG</span>
                {item.sellOut}
              </span>
              <span>
                <span>Parcial</span>
                {item.partialSellOut}
              </span>
              <span>
                <span>Porcentagem Realizada</span>
                {item.partialSellOutPercentage}
              </span>
            </>
          )}
        </Row>
      ))}
    </Container>
  );
};

export default Product;
