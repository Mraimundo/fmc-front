import React from 'react';
import { Spin } from 'services/spinning-wheel/interfaces';

import { DefaultModal, Spin as StyledSpin } from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose(): void;
  spinData: Spin;
  spin(spinId: number): Promise<{ prizeId: number }>;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  spinData,
  spin,
}) => {
  return (
    <DefaultModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <StyledSpin spinData={spinData} spin={spin} close={onRequestClose} />
    </DefaultModal>
  );
};

export default Modal;
