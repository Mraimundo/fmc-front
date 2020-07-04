import React, { useState, useEffect, useCallback } from 'react';
import { Contact, Message } from 'services/contact/connected/interfaces';
import transformer, {
  Response as GridDataItem,
} from 'services/contact/connected/transformers/toContactGridListTransformer';
import getMessages from 'services/contact/connected/getMessagesFromContact';
import transformerMessages, {
  Response as MessageItem,
} from 'services/contact/connected/transformers/toMessagesListTransformer';

import { FiClock, FiCheckCircle, FiMessageCircle } from 'react-icons/fi';

import Form from './Form';
import Messages from './Messages';
import { Container, GridHeader, TicketGrid } from './styles';

interface Props {
  className?: string;
  contacts: Contact[];
}

const TicketsGrid: React.FC<Props> = ({ className, contacts }) => {
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [gridList, setGridList] = useState<GridDataItem[]>([]);
  const [ticketSelected, setTicketSelected] = useState<Contact | undefined>(
    undefined,
  );
  const [messages, setMessages] = useState<MessageItem[]>([]);

  useEffect(() => {
    setGridList(transformer(contacts));
  }, [contacts]);

  const handleTicketClick = useCallback(
    ({ id }: Contact) => {
      setTicketSelected(contacts.find(item => item.id === id));
    },
    [contacts],
  );

  useEffect(() => {
    if (!ticketSelected) return;
    const loadMessages = async () => {
      setLoadingMessages(true);
      const data = await getMessages(ticketSelected.id);
      setMessages(transformerMessages(data));
      setLoadingMessages(false);
    };

    loadMessages();
  }, [ticketSelected]);

  const handleSendMessage = useCallback((message: string) => {
    console.log(message);
  }, []);

  return (
    <Container className={className}>
      <GridHeader>
        <span>Data de abertura</span>
        <span>Assunto/Categoria</span>
        <span>Status</span>
        <span>Respostas</span>
      </GridHeader>
      {gridList.map(item => (
        <TicketGrid
          key={`contact-list-${item.id}`}
          opened={ticketSelected?.id === item.id}
        >
          <header onClick={() => handleTicketClick(item)}>
            <span>{item.date}</span>
            <h4>{item.subject}</h4>
            <div>
              <FiClock size={26} />
            </div>
            <div>
              <FiMessageCircle size={26} />
            </div>
          </header>
          <div className="_contentMessage">
            <Messages messages={item.messages} />
            <Form sendMessage={handleSendMessage} />
          </div>
        </TicketGrid>
      ))}
    </Container>
  );
};

export default TicketsGrid;
