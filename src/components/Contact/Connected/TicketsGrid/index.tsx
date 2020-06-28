import React, { useState, useCallback } from 'react';

import { FiClock, FiCheckCircle, FiMessageCircle } from 'react-icons/fi';

import Form from './Form';
import Messages from './Messages';
import { Container, GridHeader, TicketGrid } from './styles';

interface Props {
  className?: string;
}

const TicketsGrid: React.FC<Props> = ({ className }) => {
  const [ticketSelected, setTicketSelected] = useState<{ id: number } | null>(
    null,
  );

  interface Message {
    date: string;
    time: string;
    type: 'r' | 'p';
    name: string;
    message: string;
  }

  const messages: Message[] = [
    {
      date: '02/04/2020',
      time: '14h00',
      type: 'p',
      name: 'Meu nome',
      message: 'Preciso de ajuda para incluir um participante',
    },
    {
      date: '02/04/2020',
      time: '14h00',
      type: 'p',
      name: 'Meu nome',
      message: 'Preciso de ajuda para incluir um participante',
    },
    {
      date: '02/04/2020',
      time: '14h00',
      type: 'p',
      name: 'Meu nome',
      message: 'Preciso de ajuda para incluir um participante',
    },
    {
      date: '02/04/2020',
      time: '14h00',
      type: 'p',
      name: 'Meu nome',
      message: 'Preciso de ajuda para incluir um participante',
    },
    {
      date: '03/04/2020',
      time: '18h00',
      type: 'r',
      name: 'Atendente X',
      message: 'Certo, qual o problema que você está tendo',
    },
  ];
  const test = [
    {
      id: 1,
      date: '02/04/2020',
      subject: 'Dúvidas di Focal Point',
      status: 'Em análise',
      messages,
    },
    {
      id: 2,
      date: '02/04/2020',
      subject: 'Dúvidas di Focal Point',
      status: 'Em análise',
      messages,
    },
    {
      id: 3,
      date: '02/04/2020',
      subject: 'Dúvidas di Focal Point',
      status: 'Em análise',
      messages,
    },
  ];

  const handleTicketClick = useCallback(
    (ticket: { id: number }) => {
      if (ticket.id === ticketSelected?.id) {
        setTicketSelected(null);
        return;
      }
      setTicketSelected({ id: ticket.id });
    },
    [ticketSelected],
  );

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
      {test.map(item => (
        <TicketGrid
          key={`${item.date}-${item.subject}`}
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
