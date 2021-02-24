import React from 'react';

import FmcLogo from 'components/FyingHigh/FmcLogo';
import Info from 'components/FyingHigh/Info';
import HowToWin from 'components/FyingHigh/HowToWin';
import RegisterForm from 'components/FyingHigh/RegisterForm';
import { ThemeContext } from 'styled-components';
import { fmcProdutorTheme } from 'styles/theme';
import Footer from 'components/Footer';

import { Container, Box, Title, FooterWrapper } from './styles';

const FlyingHigh: React.FC = () => {
  return (
    <Container>
      <ThemeContext.Provider value={fmcProdutorTheme}>
        <FmcLogo />
        <Title>Promoção Juntos Voamos Mais Alto</Title>
        <Box>
          <h1>AGUARDANDO KV VOANDO ALTO</h1>
        </Box>
        <Info />
        <RegisterForm />
        <HowToWin />
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </ThemeContext.Provider>
    </Container>
  );
};

export default FlyingHigh;
