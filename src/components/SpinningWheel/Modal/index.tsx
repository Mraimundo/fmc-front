import React from 'react';
import { Prize } from 'services/spinningWheel/interfaces';

import { DefaultModal, Spin } from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose(): void;
  values: Prize[];
  spin(): Promise<Prize>;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  values,
  spin,
}) => {
  return (
    <DefaultModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Spin values={values} spin={spin} close={onRequestClose} />
    </DefaultModal>
  );
};

export default Modal;
