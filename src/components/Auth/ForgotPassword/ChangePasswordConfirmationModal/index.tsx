import React from 'react';
import DefaultModal from 'components/shared/Modal';
import { Button } from 'components/shared';

import { Container } from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

const ChangePasswordConfirmationModal: React.FC<ModalProps> = ({
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
        <h3>Senha cadastrada com sucesso!</h3>
        <Button type="submit" buttonRole="primary" onClick={onRequestClose}>
          Acessar
        </Button>
      </Container>
    </DefaultModal>
  );
};

export default ChangePasswordConfirmationModal;
