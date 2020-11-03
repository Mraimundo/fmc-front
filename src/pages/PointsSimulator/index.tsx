import React from 'react';

import Header from 'components/PointsSimulator/Header';
import Table from 'components/PointsSimulator/Table';
import Footer from 'components/PointsSimulator/Footer';

import { Container, Content, CustomTableBox, Box } from './styles';

const PointsSimulator: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header />
        <CustomTableBox>
          <Box>
            <Table />
          </Box>
          <Footer />
        </CustomTableBox>
      </Content>
    </Container>
  );
};

export default PointsSimulator;
