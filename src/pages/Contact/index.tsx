import React, { useState, useEffect, useCallback } from 'react';
import { useToast } from 'context/ToastContext';
import { Button } from 'components/shared';
import { Form, TicketsGrid } from 'components/Contact/Connected';

import { Container, Content } from './styles';

const Contact: React.FC = () => {
  const { addToast } = useToast();

  return (
    <Container>
      <Content>
        <h3>Fale Conosco</h3>
        <Form />
        <div className="BoxOfGrid">
          <h3>Meus chamados</h3>
          <TicketsGrid />
        </div>
      </Content>
    </Container>
  );
};

export default Contact;
