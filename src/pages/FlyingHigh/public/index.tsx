import React from 'react';

import FmcLogo from 'components/FyingHigh/FmcLogo';
import Info from 'components/FyingHigh/Info';
import HowToWin from 'components/FyingHigh/HowToWin';
import RegisterForm from 'components/FyingHigh/RegisterForm';

import { Container, Box, Title } from './styles';

const FlyingHigh: React.FC = () => {
  return (
    <Container>
      <FmcLogo />
      <Title>Promoção Juntos Voamos Mais Alto</Title>
      <Box>
        <h1>AGUARDANDO KV VOANDO ALTO</h1>
      </Box>
      <Info />
      <RegisterForm />
      <HowToWin />
    </Container>
  );
}

export default FlyingHigh;
