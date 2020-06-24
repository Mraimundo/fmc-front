import React, { useEffect, useState } from 'react';
import { ParticipantIndication } from 'services/participantIndication/interfaces/ParticipantIndication';
import headers from './headers';
import transformer, { TransformedData } from './transformer';
import { Container } from './styles';

interface Props {
  data: ParticipantIndication[];
}

const Table: React.FC<Props> = ({ data }) => {
  const [tableData, setTableData] = useState<TransformedData[]>([]);
  useEffect(() => {
    setTableData(transformer(data));
  }, [data]);
  return (
    <Container
      headers={headers}
      data={tableData}
      noResultText="Nenhuma Pesquisa encontrada"
    />
  );
};

export default Table;
