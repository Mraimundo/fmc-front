import React from 'react';

import { Container, Separator } from './styles';

interface Props {
  prizeTitle: string;
  prizeDescription: string;
}

const Prize: React.FC<Props> = ({ prizeTitle, prizeDescription }) => {
  return (
    <Container>
      <h4>Prêmios</h4>
      <Separator />
      <h3>{prizeTitle}</h3>
      <span>{prizeDescription}</span>
    </Container>
  );
};

export default Prize;
