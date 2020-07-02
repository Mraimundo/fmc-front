import React from 'react';
import Menu from 'components/Menu';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <h1>Dashboard</h1>
      <Menu />
    </Container>
  );
};

export default Dashboard;
