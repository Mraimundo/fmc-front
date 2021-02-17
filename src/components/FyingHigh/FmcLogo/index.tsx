import React from 'react';
import fmcLogo from "assets/images/logo.png";
import { Container, LogoWrapper } from './styles';

const FmcLogo: React.FC = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={fmcLogo} alt="FMC"/>
      </LogoWrapper>
    </Container>
  );
}

export default FmcLogo;
