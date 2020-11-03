import React from 'react';

import Header from 'components/PointsSimulator/Header';
import Table from 'components/PointsSimulator/Table';

import { Container, Content } from './styles';

const PointsSimulator: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header />
        <Table />
      </Content>
    </Container>
  );
};

export default PointsSimulator;
