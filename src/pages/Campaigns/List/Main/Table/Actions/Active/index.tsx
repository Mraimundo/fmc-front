import React from 'react';
import { ReactSVG } from 'react-svg';
import OnIcon from 'assets/images/campaigns/on-icon.svg';

import { Container } from './style';

interface Props {
  id: number;
  activated: boolean;
}

const Active: React.FC<Props> = () => {
  return (
    <Container>
      <ReactSVG src={OnIcon} />
    </Container>
  );
};

export default Active;
