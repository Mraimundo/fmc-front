import React, { useEffect, useState } from 'react';
import { ParticipantIndication } from 'services/participant-indication/interfaces/ParticipantIndication';
import transformer, {
  ParticipantIndicationTableData,
} from 'services/participant-indication/transformers/participantIndicationsToTableList';
import headers from './headers';
import { Container } from './styles';

interface Props {
  data: ParticipantIndication[];
  isFetching: boolean;
  onEditClick?(id: number): Promise<void> | void;
  onResendEmailClick?(id: number): Promise<void> | void;
  onInactiveParticipantClick?(id: number): Promise<void> | void;
  onActiveParticipantClick?(id: number): Promise<void> | void;
}

const Table: React.FC<Props> = ({
  data,
  isFetching,
  onEditClick,
  onResendEmailClick,
  onInactiveParticipantClick,
  onActiveParticipantClick,
}) => {
  const [tableData, setTableData] = useState<ParticipantIndicationTableData[]>(
    [],
  );
  useEffect(() => {
    setTableData(transformer(data));
  }, [data]);
  return (
    <Container
      headers={headers({
        edit: onEditClick,
        resendIndicationEmail: onResendEmailClick,
        inactivaParticipantIndication: onInactiveParticipantClick,
        activeParticipantIndication: onActiveParticipantClick,
      })}
      data={tableData}
      noResultText="Nenhuma Pesquisa encontrada"
      isFetching={isFetching}
    />
  );
};

export default Table;
