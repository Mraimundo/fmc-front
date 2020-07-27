import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Tooltip } from 'components/shared';

import { SendMessageDTO } from 'services/contact/connected/dtos';
import { Contact, Message } from 'services/contact/connected/interfaces';
import transformer, {
  Response as GridDataItem,
  StatusText,
} from 'services/contact/connected/transformers/toContactGridListTransformer';
import getMessages from 'services/contact/connected/getMessagesFromContact';
import transformerMessages, {
  Response as MessageItem,
} from 'services/contact/connected/transformers/toMessagesListTransformer';
import sendMessage from 'services/contact/connected/sendMessage';

import check from 'assets/images/contact/check.svg';
import clock from 'assets/images/contact/clock.svg';
import message from 'assets/images/contact/message.svg';
import notAllowed from 'assets/images/contact/not-allowed.svg';

import {
  FiClock,
  FiCheckCircle,
  FiSlash,
  FiMessageCircle,
} from 'react-icons/fi';

import Form from './Form';
import Messages from './Messages';
import { Container, GridHeader, TicketGrid, Icon } from './styles';

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

  const getIcon = useCallback((status: StatusText) => {
    switch (status) {
      case 'pending':
        return (
          <Tooltip title="Pendente" type="primary">
            <Icon src={clock} defaultcolor />
          </Tooltip>
        );
      case 'answered':
        return (
          <Tooltip title="Respondido" type="primary">
            <Icon src={check} />
          </Tooltip>
        );
      case 'closed':
        return (
          <Tooltip title="Fechado" type="primary">
            <Icon src={notAllowed} />
          </Tooltip>
        );
      default:
        return (
          <Tooltip title="Status não definido" type="primary">
            <Icon src={clock} />
          </Tooltip>
        );
    }
  }, []);

  useEffect(() => {
    setGridList(transformer(contacts));
  }, [contacts]);

  const handleTicketClick = useCallback(
    ({ id }: GridDataItem) => {
      setTicketSelected(ticket =>
        ticket?.id === id ? undefined : contacts.find(item => item.id === id),
      );
    },
    [contacts],
  );

  const handleSendMessage = useCallback(async (data: SendMessageDTO) => {
    const result = await sendMessage(data);
    const newMessages = await getMessages(data.contactId);
    setMessages(transformerMessages(newMessages));
    return result;
  }, []);

  useEffect(() => {
    if (!ticketSelected) return;
    const loadMessages = async () => {
      setLoadingMessages(true);
      setTimeout(() => {
        getMessages(ticketSelected.id).then(data => {
          setMessages(transformerMessages(data));
          setLoadingMessages(false);
        });
      }, 1000);
    };

    loadMessages();
  }, [ticketSelected]);

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
            <h4>{`${item.subject} / ${item.category}`}</h4>
            <div>{getIcon(item.statusText)}</div>
            <div>
              <Icon src={message} defaultcolor />
            </div>
          </header>
          <div className="_contentMessage">
            <Messages messages={messages} loading={loadingMessages} />
            <Form contactId={item.id} sendMessage={handleSendMessage} />
          </div>
        </TicketGrid>
      ))}
    </Container>
  );
};

export default TicketsGrid;
