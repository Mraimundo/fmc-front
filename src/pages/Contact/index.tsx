import React, { useState, useEffect, useCallback } from 'react';
import { useToast } from 'context/ToastContext';
import { Button } from 'components/shared';
import Logo from 'components/shared/Logo';

import { Container, Content, BoxTickets, TicketsGrid, Form } from './styles';

const Contact: React.FC = () => {
  const { addToast } = useToast();

  return (
    <Container>
      <Logo />
      <Content>
        <h3>Fale Conosco</h3>
        <Form />
        <BoxTickets>
          <h3>Meus chamados</h3>
          <TicketsGrid />
        </BoxTickets>
      </Content>
    </Container>
  );
};

export default Contact;
