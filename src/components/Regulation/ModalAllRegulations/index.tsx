import React from 'react';
import AllRegulations from '../AllRegulations';
import { Modal } from './styles';

interface Props {
  isOpen: boolean;
  onRequestClose?(): void;
}

const ModalAllRegulations: React.FC<Props> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} type="primary">
      <AllRegulations />
    </Modal>
  );
};

export default ModalAllRegulations;
