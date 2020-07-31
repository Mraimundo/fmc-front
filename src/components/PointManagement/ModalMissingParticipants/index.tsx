import React, { useMemo } from 'react';

import { Button } from 'components/shared';
import { Modal, WrapperText, Text, WrapperButtons } from './styles';

interface ModalMissingParticipants {
  total: number;
  isOpen?: boolean;
  onClose(): void;
  onConfirm(): void;
}
const ModalMissingParticipants: React.FC<ModalMissingParticipants> = ({
  total,
  isOpen = false,
  onClose,
  onConfirm,
}) => {
  const missingParticipantsText = useMemo(() => {
    if (total === 1) {
      return `${total} participante não foi contemplado na premiação. Confirma
      distribuição?`;
    }

    return `${total} participantes não foram contemplados na premiação. Confirma
    distribuição?`;
  }, [total]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <WrapperText>
        <Text>{missingParticipantsText}</Text>
      </WrapperText>
      <WrapperButtons>
        <Button type="button" buttonRole="tertiary" onClick={onClose}>
          CANCELAR
        </Button>
        <Button type="button" buttonRole="tertiary" onClick={onConfirm}>
          CONFIRMAR
        </Button>
      </WrapperButtons>
    </Modal>
  );
};

export default ModalMissingParticipants;
