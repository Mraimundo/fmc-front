import React from 'react';

import { Container, Separator, Row, Box } from './styles';

interface Props {
  data: { title: string; value: string }[];
}

const Product: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <h3>Aceleradores</h3>
      <Separator />
      {data.map(item => (
        <Row>
          <Box>{item.title}</Box>
          <span>{item.value}</span>
        </Row>
      ))}
    </Container>
  );
};

export default Product;
