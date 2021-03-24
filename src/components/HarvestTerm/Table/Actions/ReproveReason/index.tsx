import React, { useCallback, useState } from 'react';
import { ReactSVG } from 'react-svg';

import CommentIcon from 'assets/images/contact/message.svg';
import ReasonModal from 'components/HarvestTerm/Modals/ReasonModal';

import { Container } from './styles';

interface NegotiationProps {
  reason: string;
}

const Negotiation: React.FC<NegotiationProps> = ({ reason }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  return (
    <>
      <Container>
        <ReactSVG src={CommentIcon} onClick={handleClick} />
      </Container>
      <ReasonModal
        isOpen={isOpenModal}
        reason={reason}
        cancelRequest={() => setIsOpenModal(false)}
      />
    </>
  );
};

export default Negotiation;
