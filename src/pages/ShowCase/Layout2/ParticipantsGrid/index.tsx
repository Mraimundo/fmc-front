import React, { useEffect, useState } from 'react';
import getParticipants from 'services/showcase/getMyGroupOfParticipantsToAccessPI';
import transformer, {
  Response as Data,
} from 'services/showcase/transformers/toParticipantGroupGridTransformer';
import headers from './headers';
import { Container } from './styles';

const ParticipantsGrid: React.FC = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [tableData, setTableData] = useState<Data[]>([]);

  useEffect(() => {
    setIsFetching(true);
    getParticipants()
      .then(data => {
        setTableData(transformer(data));
      })
      .finally(() => setIsFetching(false));
  }, []);

  return (
    <Container
      headers={headers}
      data={tableData}
      noResultText="Nenhum Participante encontrado"
      isFetching={isFetching}
    />
  );
};

export default ParticipantsGrid;
