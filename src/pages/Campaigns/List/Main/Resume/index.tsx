import React from 'react';

import { Container, Content, Box, Action, AddButton } from './styles';

const Resume: React.FC = () => {
  const mock = [
    { status: 'Em análise', qnt: 1 },
    { status: 'Em aprovação', qnt: 1 },
    { status: 'Publicadas', qnt: 1 },
    { status: 'Canceladas', qnt: 1 },
    { status: 'Finalizadas', qnt: 1 },
  ];
  return (
    <Container>
      <h4>Campanhas especiais</h4>
      <Content>
        <Box>
          <h6>Campanhas</h6>
          {mock.map(item => (
            <div key={item.status}>
              <h5>{item.status}</h5>
              <span />
              <h5>{item.qnt}</h5>
            </div>
          ))}
        </Box>
        <Action>
          <span>Nova campanha</span>
          <AddButton type="button" />
        </Action>
      </Content>
    </Container>
  );
};

export default Resume;
