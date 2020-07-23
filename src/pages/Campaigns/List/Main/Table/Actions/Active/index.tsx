import React from 'react';
import { ReactSVG } from 'react-svg';
import OnIcon from 'assets/images/campaigns/on-icon.svg';
import OffIcon from 'assets/images/campaigns/off-icon.svg';

import { Container } from './style';

interface Props {
  id: number;
  activated: boolean;
}

const Active: React.FC<Props> = ({ id, activated }) => {
  return (
    <Container>
      <ReactSVG src={OnIcon} />
    </Container>
  );
};

export default Active;
