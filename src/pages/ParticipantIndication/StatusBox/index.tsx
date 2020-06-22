import React from 'react';

import { Container, StatusIndicator, AddButton } from './styles';

const StatusBox: React.FC = () => {
  return (
    <Container>
      <h3>Equipe ativa no sistema</h3>
      <StatusIndicator />
      <AddButton />
    </Container>
  );
};

export default StatusBox;
