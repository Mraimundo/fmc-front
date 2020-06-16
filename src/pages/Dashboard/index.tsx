import React, { useCallback } from 'react';
import { useAuth } from 'context/AuthContext';
import { Button } from 'components/shared';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { participant, signOut } = useAuth();

  React.useEffect(() => {
    console.log(participant);
  }, [participant]);

  const handleEditClick = useCallback(() => {
    console.log('oi');
  }, []);

  return (
    <Container>
      <h3>Participant: {participant.name}</h3>
      <h3>cpf: {participant.cpf}</h3>
      <Button buttonRole="primary" type="button" onClick={signOut}>
        Sair
      </Button>
      <Button buttonRole="primary" type="button" onClick={handleEditClick}>
        Editar Participante
      </Button>
    </Container>
  );
};

export default Dashboard;
