import React, { useEffect, useState } from 'react';
import openTicket from 'services/contact/connected/openTicket';
import getContacts from 'services/contact/connected/listContacts';
import { Contact as IContact } from 'services/contact/connected/interfaces';

import { Container, Content, BoxTickets, TicketsGrid, Form } from './styles';

const Contact: React.FC = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    getContacts().then(data => setContacts(data));
  }, [refreshCount]);

  return (
    <Container>
      <Content>
        <h3>Fale Conosco</h3>
        <Form
          openTicket={openTicket}
          onReload={() => setRefreshCount(oldResult => oldResult + 1)}
        />
        <BoxTickets>
          <h3>Meus chamados</h3>
          <TicketsGrid contacts={contacts} />
        </BoxTickets>
      </Content>
    </Container>
  );
};

export default Contact;
