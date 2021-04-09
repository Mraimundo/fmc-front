import React, { useState, useCallback, useEffect } from 'react';

import closeIcon from 'assets/images/training/close-icon.svg';
import { ReactSVG } from 'react-svg';
import { useFarmersContext } from 'pages/ProducerApproval/Context';
import { Container, Modal, TextArea, Title } from './styles';
import { Button, Close, Actions } from '../shared/styles';

interface ReprovalModalProps {
  isOpen: boolean;
  onCancelRequest: () => void;
}

const ReprovalModal: React.FC<ReprovalModalProps> = ({
  isOpen,
  onCancelRequest,
}) => {
  const [reason, setReason] = useState('');
  const { reproveFarmer } = useFarmersContext();

  const reasonChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
      setReason(e.target.value);
    },
    [],
  );

  const reproveClickHandler = useCallback(() => {
    reproveFarmer(reason);
  }, [reason, reproveFarmer]);

  useEffect(() => {
    setReason('');
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onCancelRequest}>
      <Close>
        <button type="button" onClick={onCancelRequest}>
          <ReactSVG src={closeIcon} />
        </button>
      </Close>
      <Container>
        <Title>Tem certeza que deseja REPROVAR este cadastro?</Title>
        <TextArea
          label="Observação"
          value={reason}
          onChange={reasonChangeHandler}
        />
        <Actions>
          <Button type="button" buttonRole="primary" onClick={onCancelRequest}>
            Cancelar
          </Button>
          <Button
            type="button"
            buttonRole="primary"
            onClick={reproveClickHandler}
          >
            Reprovar
          </Button>
        </Actions>
      </Container>
    </Modal>
  );
};

export default ReprovalModal;
