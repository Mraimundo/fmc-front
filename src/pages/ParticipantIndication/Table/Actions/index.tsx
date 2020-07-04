import React, { useState, useCallback } from 'react';
import ReactLoading from 'react-loading';

import { ACTIVE, INACTIVE, PRECHARGE } from 'config/constants/vendavallStatus';

import { FaEdit, FaTrashAlt, FaShareSquare } from 'react-icons/fa';

import { Container } from './style';

interface Props {
  id: number;
  personalData: { id: number; status: number };
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
  personalData,
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
          {typeof edit === 'function' && personalData.status === PRECHARGE && (
            <span title="Editar indicação">
              <FaEdit
                size={20}
                onClick={() => handleAction({ fn: edit, id })}
              />
            </span>
          )}
          {typeof inactiveParticipantIndication === 'function' &&
            (personalData.status === ACTIVE ||
              personalData.status === PRECHARGE) && (
              <span title="Desativar participante">
                <FaTrashAlt
                  size={20}
                  onClick={() =>
                    handleAction({ fn: inactiveParticipantIndication, id })
                  }
                />
              </span>
            )}
          {typeof resendIndication === 'function' &&
            personalData.status === PRECHARGE && (
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
