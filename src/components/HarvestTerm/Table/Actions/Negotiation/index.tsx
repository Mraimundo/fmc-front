import React, { useCallback, useState } from 'react';
import { ReactSVG } from 'react-svg';

import CommentIcon from 'assets/images/contact/message.svg';
import NegotiationModal from 'components/HarvestTerm/Modals/NegotiationModal';

import { Container } from './styles';

interface NegotiationProps {
  agreementTermId: string;
}

const Negotiation: React.FC<NegotiationProps> = ({ agreementTermId }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  return (
    <>
      <Container>
        <ReactSVG src={CommentIcon} onClick={handleClick} />
      </Container>
      <NegotiationModal
        isOpen={isOpenModal}
        agreementTermId={agreementTermId}
        cancelRequest={() => setIsOpenModal(false)}
      />
    </>
  );
};

export default Negotiation;
