import React from 'react';
import { useAuth } from 'context/AuthContext';
import { Button } from 'components/shared';
import Menu from 'components/Menu';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { participant, signOut } = useAuth();

  return (
    <Container>
      <h3>Participant: {participant.name}</h3>
      <h3>cpf: {participant.cpf}</h3>

      <Button buttonRole="primary" type="button" onClick={signOut}>
        Sair
      </Button>

      <Menu />
    </Container>
  );
};

export default Dashboard;
