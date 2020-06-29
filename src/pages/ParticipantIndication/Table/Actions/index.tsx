import React, { useState, useCallback } from 'react';
import ReactLoading from 'react-loading';

import { FaEdit, FaTrashAlt, FaShareSquare } from 'react-icons/fa';

import { Container } from './style';

interface Props {
  id: number;
  edit?(id: number): Promise<void> | void;
  resendIndication?(id: number): Promise<void> | void;
  inactiveParticipantIndication?(id: number): Promise<void> | void;
}

interface ActionProps {
  fn(id: number): Promise<void> | void;
  id: number;
}

const Actions: React.FC<Props> = ({
  id,
  edit,
  resendIndication,
  inactiveParticipantIndication,
}) => {
  const [loading, setLoading] = useState(false);

  const handleAction = useCallback(
    async ({ fn, id: indicationId }: ActionProps): Promise<void> => {
      setLoading(true);
      await fn(indicationId);
      setLoading(false);
    },
    [],
  );

  return (
    <Container loading={loading}>
      {loading ? (
        <ReactLoading className="_loading" type="bars" height={24} width={24} />
      ) : (
        <>
          {typeof edit === 'function' && (
            <span title="Editar indicação">
              <FaEdit
                size={20}
                onClick={() => handleAction({ fn: edit, id })}
              />
            </span>
          )}
          {typeof inactiveParticipantIndication === 'function' && (
            <span title="Desativar participante">
              <FaTrashAlt
                size={20}
                onClick={() =>
                  handleAction({ fn: inactiveParticipantIndication, id })}
              />
            </span>
          )}
          {typeof resendIndication === 'function' && (
            <span title="Reenviar email de indicação">
              <FaShareSquare
                size={20}
                onClick={() => handleAction({ fn: resendIndication, id })}
              />
            </span>
          )}
        </>
      )}
    </Container>
  );
};

export default Actions;
