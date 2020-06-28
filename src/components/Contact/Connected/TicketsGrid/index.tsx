import React, { useState, useCallback } from 'react';

import { FiClock, FiCheckCircle, FiMessageCircle } from 'react-icons/fi';

import { Container, GridHeader, TicketGrid } from './styles';

const TicketsGrid: React.FC = () => {
  const [ticketSelected, setTicketSelected] = useState<{ id: number } | null>(
    null,
  );
  const test = [
    {
      id: 1,
      date: '02/04/2020',
      subject: 'Dúvidas di Focal Point',
      status: 'Em análise',
    },
    {
      id: 2,
      date: '02/04/2020',
      subject: 'Dúvidas di Focal Point',
      status: 'Em análise',
    },
    {
      id: 3,
      date: '02/04/2020',
      subject: 'Dúvidas di Focal Point',
      status: 'Em análise',
    },
  ];

  const handleTicketClick = useCallback((ticket: { id: number }) => {
    setTicketSelected({ id: ticket.id });
  }, []);

  return (
    <Container>
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
            <h1>Hello</h1>
          </div>
        </TicketGrid>
      ))}
    </Container>
  );
};

export default TicketsGrid;
