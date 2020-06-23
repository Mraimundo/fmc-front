import React from 'react';

import Logo from './Logo';
import StatusBox from './StatusBox';
import Filters from './Filters';
import Table from './Table';
import { Container, Content } from './styles';

const ParticipantIndication: React.FC = () => {
  return (
    <Container>
      <Logo />
      <Content>
        <h3>Indique um participante</h3>
        <StatusBox percentActivated={10} />
        <span>Usuários indicados</span>
        <Filters />
        <Table />
      </Content>
    </Container>
  );
};

export default ParticipantIndication;
