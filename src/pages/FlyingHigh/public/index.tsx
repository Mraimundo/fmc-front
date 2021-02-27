import React from 'react';

import FmcLogo from 'components/FyingHigh/FmcLogo';
import Info from 'components/FyingHigh/Info';
import HowToWin from 'components/FyingHigh/HowToWin';
import RegisterForm from 'components/FyingHigh/RegisterForm';
import { ThemeContext } from 'styled-components';
import { fmcProdutorTheme } from 'styles/theme';
import Footer from 'components/Footer';
import promoImage from 'assets/images/flying-high/flying-high-promo.png';

import {
  Container,
  Header,
  Title,
  FooterWrapper,
  PromoWrapper,
  ImageWrapper,
  FormWrapper,
} from './styles';

const FlyingHigh: React.FC = () => {
  return (
    <Container>
      <ThemeContext.Provider value={fmcProdutorTheme}>
        <Header>
          <FmcLogo />
          <PromoWrapper>
            <ImageWrapper>
              <img src={promoImage} alt="Juntos Voamos Mais Alto" />
            </ImageWrapper>
            <FormWrapper>
              <RegisterForm />
              <p>
                Entre no <b>JUNTOS</b> e cadastre uma nota fiscal para concorrer
                ao um drone.
              </p>
              <p>Participe! Estamos juntos e é para valer.</p>
            </FormWrapper>
          </PromoWrapper>
        </Header>
        <Info />
        <HowToWin />
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </ThemeContext.Provider>
    </Container>
  );
};

export default FlyingHigh;
