import React from 'react';
import { useFarmersContext } from 'pages/ProducerApproval/Context';
import Filters from '../Filters';
import Tabs from '../Tabs';
import FarmersCardList from '../FarmersCardList';

import { Container } from './styles';

const Main: React.FC = () => {
  const { farmers } = useFarmersContext();
  return (
    <Container>
      <Tabs />
      <Filters />
      <FarmersCardList farmers={farmers} />
    </Container>
  );
};

export default Main;
