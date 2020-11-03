import React from 'react';

import Header from 'components/PointsSimulator/Result/Header';
import Body from 'components/PointsSimulator/Result/Body';

import { Container, Content } from './styles';

const Result: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header />
        <Body />
      </Content>
    </Container>
  );
};

export default Result;
