import React, { useCallback } from 'react';
import { ReactSVG } from 'react-svg';

import CommentIcon from 'assets/images/contact/message.svg';

import { Container } from './styles';

interface NegotiationProps {
  agreementTermId: string;
}

const Negotiation: React.FC<NegotiationProps> = ({ agreementTermId }) => {
  const handleClick = useCallback(() => {
    alert(`HERE WE GO   ${agreementTermId}`);
  }, [agreementTermId]);

  return (
    <Container>
      <ReactSVG src={CommentIcon} onClick={handleClick} />
    </Container>
  );
};

export default Negotiation;
