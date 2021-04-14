import React from 'react';

import { ReactSVG } from 'react-svg';
import CloseIcon from 'assets/images/training/close-icon.svg';
import { Container, Modal, Button, Title, Actions, Close } from './styles';

interface ApprovalModalProps {
  isOpen: boolean;
  cancelRequest: () => void;
  confirmRequest: () => void;
}

const ApprovalModal: React.FC<ApprovalModalProps> = ({
  isOpen,
  cancelRequest,
  confirmRequest,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={cancelRequest} zIndex={10}>
      <Close>
        <button type="button" onClick={cancelRequest}>
          <ReactSVG src={CloseIcon} />
        </button>
      </Close>
      <Container>
        <Title>
          Tem certeza que deseja APROVAR <br />
          este Termo de Safra?
        </Title>
        <Actions>
          <Button type="button" buttonRole="primary" onClick={cancelRequest}>
            Cancelar
          </Button>
          <Button type="button" buttonRole="primary" onClick={confirmRequest}>
            Confirmar
          </Button>
        </Actions>
      </Container>
    </Modal>
  );
};

export default ApprovalModal;
