import React from 'react';
import { useAuth } from 'context/AuthContext';
import { Button } from 'components/shared';
import Menu from 'components/Menu';

import { GoSignOut } from 'react-icons/go';

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
        <Menu />
      </Content>
    </Container>
  );
};

export default Dashboard;
