import React, { useState, useCallback } from 'react';
import ReactLoading from 'react-loading';
import { Button } from 'components/shared';

import { ACTIVE, INACTIVE, PRECHARGE } from 'config/constants/vendavallStatus';

import { FaEdit, FaTrashAlt, FaShareSquare, FaCheck } from 'react-icons/fa';

import { Container, Content, ActionsBox } from './style';

interface Props {
  id: number;
  personalData: { id: number; status: number; name: string };
  edit?(id: number): Promise<void> | void;
  resendIndication?(id: number): Promise<void> | void;
  inactiveParticipantIndication?(id: number): Promise<void> | void;
  activeParticipantIndication?(id: number): Promise<void> | void;
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
  activeParticipantIndication,
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
      <Content>
        <span>{personalData.name}</span>
        {loading ? (
          <ReactLoading
            className="_loading"
            type="bars"
            height={24}
            width={24}
            color="#dd0022"
          />
        ) : (
          <ActionsBox>
            <Button
              type="button"
              buttonRole="primary"
              onClick={() =>
                typeof edit === 'function'
                  ? handleAction({ fn: edit, id })
                  : null
              }
              disabled={
                typeof edit !== 'function' || personalData.status !== PRECHARGE
              }
            >
              Editar
            </Button>
            {typeof inactiveParticipantIndication === 'function' &&
              (personalData.status === ACTIVE ||
                personalData.status === PRECHARGE) && (
                <Button
                  type="button"
                  buttonRole="primary"
                  onClick={() =>
                    handleAction({ fn: inactiveParticipantIndication, id })
                  }
                >
                  Inativar
                </Button>
              )}
            {typeof activeParticipantIndication === 'function' &&
              personalData.status === INACTIVE && (
                <Button
                  type="button"
                  buttonRole="primary"
                  onClick={() =>
                    handleAction({ fn: activeParticipantIndication, id })
                  }
                >
                  Ativar
                </Button>
              )}

            <Button
              type="button"
              buttonRole="primary"
              onClick={() =>
                typeof resendIndication === 'function'
                  ? handleAction({ fn: resendIndication, id })
                  : null
              }
              disabled={
                typeof resendIndication !== 'function' ||
                personalData.status !== PRECHARGE
              }
            >
              Reenviar E-mail
            </Button>
          </ActionsBox>
        )}
      </Content>
    </Container>
  );
};

export default Actions;
