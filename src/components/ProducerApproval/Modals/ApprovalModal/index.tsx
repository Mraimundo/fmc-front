import React from 'react';

import closeIcon from 'assets/images/training/close-icon.svg';
import { ReactSVG } from 'react-svg';
import { useFarmersContext } from 'pages/ProducerApproval/Context';
import { Container, Modal } from './styles';
import { Button, Close, Title, Actions } from '../shared/styles';

interface ApprovalModalProps {
  isOpen: boolean;
  onCancelRequest: () => void;
}

const ApprovalModal: React.FC<ApprovalModalProps> = ({
  isOpen,
  onCancelRequest,
}) => {
  const { approveFarmer } = useFarmersContext();

  return (
    <Modal isOpen={isOpen} onRequestClose={onCancelRequest} zIndex={10}>
      <Close>
        <button type="button" onClick={onCancelRequest}>
          <ReactSVG src={closeIcon} />
        </button>
      </Close>
      <Container>
        <Title>Tem certeza que deseja aprovar esse cadastro?</Title>
        <Actions>
          <Button type="button" buttonRole="primary" onClick={onCancelRequest}>
            Cancelar
          </Button>
          <Button type="button" buttonRole="primary" onClick={approveFarmer}>
            Confirmar
          </Button>
        </Actions>
      </Container>
    </Modal>
  );
};

export default ApprovalModal;
