import React from 'react';
import DefaultModal from 'components/shared/Modal';
import { Button } from 'components/shared';

import { Container } from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose(): void;
  email: string;
}

const SendResetPasswordConfirmationModal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  email,
}) => {
  return (
    <DefaultModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      type="secondary"
    >
      <Container>
        <h3>Solicitação de alteraçã de senha enviada</h3>
        <p>
          Clique no link enviado para o seu email {email} para recadastramento
          de senha
        </p>
        <Button type="submit" buttonRole="primary" onClick={onRequestClose}>
          Ok
        </Button>
      </Container>
    </DefaultModal>
  );
};

export default SendResetPasswordConfirmationModal;
