import React from 'react';

import FmcLogo from 'components/FyingHigh/FmcLogo';
import Info from 'components/FyingHigh/Info';
import HowToWin from 'components/FyingHigh/HowToWin';
import RegisterForm from 'components/FyingHigh/RegisterForm';
import FlyingHighBanner from 'components/FyingHigh/Banner';
import HeaderText from 'components/FyingHigh/Info/HeaderText';
import { ThemeContext } from 'styled-components';
import { fmcProdutorTheme } from 'styles/theme';
import Footer from 'components/Footer';

import {
  Container,
  Header,
  FooterWrapper,
  PromoWrapper,
  ImageWrapper,
  FormWrapper,
  UpperEllipse,
  LowerEllipse,
  Contact,
} from './styles';

const FlyingHigh: React.FC = () => {
  return (
    <Container>
      <ThemeContext.Provider value={fmcProdutorTheme}>
        <Header>
          <FmcLogo />
          <PromoWrapper>
            <ImageWrapper>
              <FlyingHighBanner />
            </ImageWrapper>
            <FormWrapper>
              <UpperEllipse />
              <RegisterForm />
              <HeaderText />
            </FormWrapper>
            <LowerEllipse />
          </PromoWrapper>
        </Header>
        <Info />
        <HowToWin />
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </ThemeContext.Provider>
      <Contact initialPosition="right-bottom" />
    </Container>
  );
};

export default FlyingHigh;
