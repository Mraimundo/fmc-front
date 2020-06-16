import React from 'react';
import { useAuth } from 'context/AuthContext';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { participant } = useAuth();

  return (
    <Container>
      <h1>Dashboard</h1>
    </Container>
  );
};

export default Dashboard;
