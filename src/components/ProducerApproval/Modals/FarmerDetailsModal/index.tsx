import React from 'react';

import { Container, Modal } from './styles';
import CloseButton from '../shared/CloseButton';

interface FarmerDetailsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const FarmerDetailsModal: React.FC<FarmerDetailsModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <CloseButton onClickHandler={onRequestClose} />
      <Container>
        <h1>Here goes your Farmer Data</h1>
      </Container>
    </Modal>
  );
};

export default FarmerDetailsModal;
