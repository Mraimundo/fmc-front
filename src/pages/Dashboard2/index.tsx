import React, { useCallback } from 'react';
import { useAuth } from 'context/AuthContext';
import { Button } from 'components/shared';

import { Link } from 'react-router-dom';
import { Container } from './styles';

const Dashboard2: React.FC = () => {
  const { participant, signOut } = useAuth();

  const handleEditClick = useCallback(() => {
    console.log('oi');
  }, []);

  return (
    <Container>
      <h3>Participant: {participant.name}</h3>
      <h3>cpf: {participant.cpf}</h3>
      <Link to="dashboard">dashboard</Link>
      <Button buttonRole="primary" type="button" onClick={signOut}>
        Sair
      </Button>
      <Button buttonRole="primary" type="button" onClick={handleEditClick}>
        Editar Participante
      </Button>
    </Container>
  );
};

export default Dashboard2;
