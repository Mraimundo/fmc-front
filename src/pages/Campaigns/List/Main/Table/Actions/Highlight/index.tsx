import React from 'react';
import { ReactSVG } from 'react-svg';
import StarIcon from 'assets/images/campaigns/star-icon.svg';

import { Container } from './style';

interface Props {
  id: number;
  highlight: boolean;
}

const HighLight: React.FC<Props> = ({ id, highlight }) => {
  return (
    <Container>
      <ReactSVG src={StarIcon} />
    </Container>
  );
};

export default HighLight;
