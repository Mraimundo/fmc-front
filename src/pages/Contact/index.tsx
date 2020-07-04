import React from 'react';
import openTicket from 'services/contact/connected/openTicket';

import { Container, Content, BoxTickets, TicketsGrid, Form } from './styles';

const Contact: React.FC = () => {
  return (
    <Container>
      <Content>
        <h3>Fale Conosco</h3>
        <Form openTicket={openTicket} />
        <BoxTickets>
          <h3>Meus chamados</h3>
          <TicketsGrid />
        </BoxTickets>
      </Content>
    </Container>
  );
};

export default Contact;
