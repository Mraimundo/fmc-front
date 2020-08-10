import React from 'react';

import { Container, Separator } from './styles';

interface Props {
  acceptedDate: string;
}

const Regulation: React.FC<Props> = ({ acceptedDate }) => {
  return (
    <Container>
      <h4>Regulamento</h4>
      <Separator />
      <span>Aceito em {acceptedDate}</span>
    </Container>
  );
};

export default Regulation;
