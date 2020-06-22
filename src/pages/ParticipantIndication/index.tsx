import React from 'react';

import Logo from './Logo';
import { Container } from './styles';

const ParticipantIndication: React.FC = () => {
  return (
    <Container>
      <Logo />
      <Content>
        <h3>Indique um participante</h3>
        <StatusBox>
          <h3>Equipe ativa no sistema</h3>
          <StatusIndicator />
          <AddButton />
        </StatusBox>
        <span>Usuários indicados</span>
        <Filters>
          <FilialSelect />
          <RoleSelect />
          <Button>Filtrar</Button>
        </Filters>
        <Table />
      </Content>
    </Container>
  );
};

export default ParticipantIndication;
