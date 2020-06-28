import React, { useState, useEffect, useCallback } from 'react';
import { useToast } from 'context/ToastContext';
import { Button } from 'components/shared';
import { Form } from 'components/Contact/Connected';

import { Container, Content, BoxTickets, TicketsGrid } from './styles';

const Contact: React.FC = () => {
  const { addToast } = useToast();

  return (
    <Container>
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
