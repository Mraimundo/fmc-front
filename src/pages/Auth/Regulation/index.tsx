import React from 'react';
import AllRegulations from 'components/Regulation/AllRegulations';
import Logo from 'components/shared/Logo';
import { Container, Content } from './styles';

const Regulation: React.FC = () => {
  return (
    <Container>
      <AllRegulations />
    </Container>
  );
};

export default Regulation;
