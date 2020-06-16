import React from 'react';
import DataRegulation from 'components/Regulation/DataRegulation';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <DataRegulation />
    </Container>
  );
};

export default Dashboard;
