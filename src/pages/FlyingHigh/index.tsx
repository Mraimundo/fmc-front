import React from 'react';

import FmcLogo from 'components/FlyingHigh/FmcLogo';
import Info from 'components/FlyingHigh/Info';
import HowToWin from 'components/FlyingHigh/HowToWin';
import RegisterForm from 'components/FlyingHigh/RegisterForm';
import FlyingHighBanner from 'components/FlyingHigh/Banner';
import HeaderText from 'components/FlyingHigh/Info/HeaderText';
import Footer from 'components/Footer';
import useDimensions from 'hooks/use-window-dimensions';

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
  const { width } = useDimensions();
  return (
    <Container>
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
      <Contact initialPosition={width > 720 ? 'right-bottom' : 'right-top'} />
    </Container>
  );
};

export default FlyingHigh;
