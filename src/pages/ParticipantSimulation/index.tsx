import React, { useCallback } from 'react';

import Filters, { FilterOptions } from './Filters';
import Table from './Table';

import { Container, Content, Separator } from './styles';

const ParticipantSimulations: React.FC = () => {
  const onFilter = useCallback(async (filters: FilterOptions): Promise<
    void
  > => {
    console.log('teste');
  }, []);

  const mock = [
    {
      clientCode: 23456,
      name: 'Teste Nome',
      email: 'teste@nome.com',
      id: 1,
    },
  ];

  return (
    <Container>
      <Content>
        <h3>Visão do participante</h3>
        <span>
          Selecione os filtros abaixo para acessar como um participante.
        </span>
        <Filters onFilter={onFilter} />
        <Separator />
        <h4>Participantes</h4>
        <Table data={mock} isFetching={false} />
      </Content>
    </Container>
  );
};

export default ParticipantSimulations;
