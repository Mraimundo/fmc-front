import React from 'react';

import Header from 'components/PointsSimulator/Result/Header';
import Body from 'components/PointsSimulator/Result/Body';
import Footer from 'components/PointsSimulator/Result/Footer';

import { Container, Content } from './styles';

const Result: React.FC = () => {
  return (
    <Container id="result">
      <Content>
        <Header />
        <Body />
        <Footer />
      </Content>
    </Container>
  );
};

export default Result;
