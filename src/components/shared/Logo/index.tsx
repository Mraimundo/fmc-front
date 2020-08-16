import React from 'react';
import { Visible } from 'react-grid-system';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

import juntosLogoMobile from 'assets/images/juntos-logo-mobile.svg';
import logoFmc from 'assets/images/indication/logo-fmc.svg';
import logoRevenda from 'assets/images/indication/logo-juntos.svg';
import logoCooperativa from 'assets/images/indication/logo-cooperativa.svg';

import { Container, Content, FmcLogoWrapper } from './styles';

interface Props {
  className?: string;
  logoType?: 'Revenda' | 'Cooperativa';
}
const Logo: React.FC<Props> = ({ className, logoType = 'Revenda' }) => {
  return (
    <Container className={className}>
      <Content>
        <FmcLogoWrapper>
          <Link to="/">
            <ReactSVG src={logoFmc} />
          </Link>
        </FmcLogoWrapper>
        <Visible xs sm md lg>
          <img src={juntosLogoMobile} alt="" title="" />
        </Visible>
        <Visible xl xxl>
          {logoType === 'Revenda' ? (
            <ReactSVG src={logoRevenda} />
          ) : (
            <ReactSVG src={logoCooperativa} />
          )}
        </Visible>
      </Content>
    </Container>
  );
};

export default Logo;
