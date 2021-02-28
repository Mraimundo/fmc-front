import React from 'react';

import FmcLogo from 'components/FlyingHigh/FmcLogo';
import Info from 'components/FlyingHigh/Info';
import HowToWin from 'components/FlyingHigh/HowToWin';
import RegisterForm from 'components/FlyingHigh/RegisterForm';
import FlyingHighBanner from 'components/FlyingHigh/Banner';
import HeaderText from 'components/FlyingHigh/Info/HeaderText';
// import { ThemeContext } from 'styled-components';
// import { producerTheme as fmcProdutorTheme } from 'styles/theme';
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
      {/* <ThemeContext.Provider value={fmcProdutorTheme}> */}
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
      {/* </ThemeContext.Provider> */}
      <Contact initialPosition="right-bottom" />
    </Container>
  );
};

export default FlyingHigh;
