import React, { useCallback } from 'react';
import { useAuth } from 'context/AuthContext';
import { Button } from 'components/shared';
import history from 'services/history';

import { Link } from 'react-router-dom';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { participant, signOut } = useAuth();

  const handleEditClick = useCallback(() => {
    history.push('/edit');
  }, []);

  return (
    <Container>
      <h3>Participant: {participant.name}</h3>
      <h3>cpf: {participant.cpf}</h3>
      <Link to="dashboard2">dashboard2</Link>
      <Button buttonRole="primary" type="button" onClick={signOut}>
        Sair
      </Button>
      <Button buttonRole="primary" type="button" onClick={handleEditClick}>
        Editar Participante
      </Button>
      <Link to="/indication">Indicação</Link>
      <Link to="/news">Notícias</Link>
    </Container>
  );
};

export default Dashboard;
