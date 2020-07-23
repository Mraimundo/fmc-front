import React, { useEffect, useState } from 'react';
import { ParticipantIndication } from 'services/participantIndication/interfaces/ParticipantIndication';
import transformer, {
  ParticipantIndicationTableData,
} from 'services/participantIndication/transformers/participantIndicationsToTableList';
import headers from './headers';
import { Container } from './styles';

interface Props {
  data: ParticipantIndication[];
  isFetching: boolean;
}

const Table: React.FC = () => {
  /* const [tableData, setTableData] = useState<ParticipantIndicationTableData[]>(
    [],
  ); */

  const mock = [
    {
      id: 1,
      solicitationDate: '06/06/2020',
      campaign: 'Título da campanha',
      edit: {
        id: 1,
        status: {
          id: 0,
          name: 'Teste',
        },
      },
      status: {
        status: {
          id: 0,
          name: 'Em aprovação',
        },
      },
      approval: {
        id: 1,
        status: {
          id: 0,
          name: 'Teste',
        },
      },
      highlight: {
        id: 1,
        highlight: true,
      },
      activated: {
        id: 1,
        activated: true,
      },
    },
  ];

  /* useEffect(() => {
    setTableData(transformer(data));
  }, [data]); */
  return (
    <Container
      headers={headers}
      data={mock}
      noResultText="Nenhuma Pesquisa encontrada"
      isFetching={false}
    />
  );
};

export default Table;
