import React from 'react';
import { useAuth } from 'context/AuthContext';
import Menu from 'components/Menu';

import { GoSignOut } from 'react-icons/go';

import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  const { participant, signOut } = useAuth();

  return (
    <Container>
      <Content>
        <h3>Olá {participant.name}</h3>
        <button type="button" onClick={signOut}>
          <GoSignOut size={24} color="red" />
        </button>
        <Link to="gerenciamento-de-campanhas/registrar">Criar campanha</Link>
        <Link to="gerenciamento-de-campanhas/lista">Listar campanhas</Link>
        <Menu />
      </Content>
    </Container>
  );
};

export default Dashboard;
