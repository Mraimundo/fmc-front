import React from 'react';
import { ModalStatus } from 'hooks/use-modal-status';

import { Container, Separator, RegulationLink } from './styles';

interface Props {
  acceptedDate: string;
  regulationModal: ModalStatus;
}

const Regulation: React.FC<Props> = ({ acceptedDate, regulationModal }) => {
  const { openModal } = regulationModal;
  return (
    <Container>
      <h4>Regulamento</h4>
      <Separator />
      <span>
        Aceito em{' '}
        <RegulationLink onClick={openModal}>{acceptedDate}</RegulationLink>
      </span>
    </Container>
  );
};

export default Regulation;
