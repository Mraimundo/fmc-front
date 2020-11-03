import React from 'react';

import Header from 'components/PointsSimulator/Calculator/Header';
import Table from 'components/PointsSimulator/Calculator/Table';
import Footer from 'components/PointsSimulator/Calculator/Footer';

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
