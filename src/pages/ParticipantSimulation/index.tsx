import React, { useCallback, useEffect, useState } from 'react';

import getParticipants, {
  Participant,
  FilterOptions,
} from 'services/participant-simulation/get-participants-list-to-simulate';
import Filters from './Filters';
import Table from './Table';

import { Container, Content, Separator } from './styles';

const ParticipantSimulations: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [filters, setFilters] = useState<FilterOptions>({});

  const onFilter = useCallback(async (_filters: FilterOptions): Promise<
    void
  > => {
    setFilters(_filters);
  }, []);

  useEffect(() => {
    getParticipants(filters).then(data => setParticipants(data));
  }, [filters]);

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
        <Table data={participants} isFetching={false} />
      </Content>
    </Container>
  );
};

export default ParticipantSimulations;
