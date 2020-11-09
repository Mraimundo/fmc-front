import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { getIndicators } from 'state/modules/points-simulator/selectors';

import Header from 'components/PointsSimulator/Result/Header';
import Body, { Card } from 'components/PointsSimulator/Result/Body';
import Footer from 'components/PointsSimulator/Result/Footer';
import { indicatorsToCards } from './transformers';

import { Container, Content } from './styles';

const Result: React.FC = () => {
  /*
    title="Faturamento"
            description="Realizado 19/20 - US$ 1.333.444"
            tableData={[
              { title: 'Meta 20/21', value: 'US$ 1.333.444' },
              { title: 'Realizado 20/21', value: 'US$ 1.333.444' },
            ]}
            percentageCompleted={100}
            percentageSimulated={100}
  */

  const [indicatorCards, setIndicatorCards] = useState<Card[]>([]);
  const indicators = useSelector(getIndicators);

  useEffect(() => {
    setIndicatorCards(indicatorsToCards(indicators));
  }, [indicators]);

  return (
    <Container id="result">
      <Content>
        <Header />
        <Body cards={indicatorCards} />
        <Footer />
      </Content>
    </Container>
  );
};

export default Result;
