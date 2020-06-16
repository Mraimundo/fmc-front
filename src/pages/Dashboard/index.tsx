import React from 'react';

import Accordion from 'components/shared/Accordion';
import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <h1>Dashboard</h1>
      <Content>
        <Accordion title="Teste">
          <h1>Oi</h1>
          <h2>Bye</h2>
        </Accordion>
      </Content>
    </Container>
  );
};

export default Dashboard;
