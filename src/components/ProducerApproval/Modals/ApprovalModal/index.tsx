import React from 'react';

import { useFarmersContext } from 'pages/ProducerApproval/Context';
import { Container, Modal } from './styles';
import { Button, Title, Actions } from '../shared/styles';
import CloseButton from '../shared/CloseButton';

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
      <CloseButton onClickHandler={onCancelRequest} />
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
