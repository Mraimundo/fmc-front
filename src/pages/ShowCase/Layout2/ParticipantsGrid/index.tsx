import React from 'react';

import { Response as Data } from 'services/showcase/transformers/toParticipantGroupGridTransformer';
import headers from './headers';
import { Container } from './styles';

interface Props {
  isFetching: boolean;
  tableData: Data[];
}

const ParticipantsGrid: React.FC<Props> = ({ isFetching, tableData }) => {
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
