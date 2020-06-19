import React from 'react';
import DefaultModal from 'components/shared/Modal';
import { Button } from 'components/shared';

import { Container } from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

const SendResetPasswordConfirmationModal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  return (
    <DefaultModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      type="secondary"
    >
      <Container>
        <h3>Solicitação de alteração de senha enviada</h3>
        <p>
          Clique no link enviado para o seu email para recadastramento de senha
        </p>
        <Button type="submit" buttonRole="quaternary" onClick={onRequestClose}>
          Ok
        </Button>
      </Container>
    </DefaultModal>
  );
};

export default SendResetPasswordConfirmationModal;
