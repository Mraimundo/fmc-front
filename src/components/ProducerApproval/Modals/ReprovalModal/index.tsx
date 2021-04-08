import React from 'react';

import closeIcon from 'assets/images/training/close-icon.svg';
import { ReactSVG } from 'react-svg';
import { Container, Modal, TextArea, Title } from './styles';
import { Button, Close, /* Title, */ Actions } from '../shared/styles';

interface ReprovalModalProps {
  isOpen: boolean;
  onCancelRequest: () => void;
  onConfirmReprove: () => void;
}

const ReprovalModal: React.FC<ReprovalModalProps> = ({
  isOpen,
  onCancelRequest,
  onConfirmReprove,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onCancelRequest}>
      <Close>
        <button type="button" onClick={onCancelRequest}>
          <ReactSVG src={closeIcon} />
        </button>
      </Close>
      <Container>
        <Title>Tem certeza que deseja REPROVAR este cadastro?</Title>
        <TextArea label="Observação" />
        <Actions>
          <Button type="button" buttonRole="primary" onClick={onCancelRequest}>
            Cancelar
          </Button>
          <Button type="button" buttonRole="primary" onClick={onConfirmReprove}>
            Reprovar
          </Button>
        </Actions>
      </Container>
    </Modal>
  );
};

export default ReprovalModal;
