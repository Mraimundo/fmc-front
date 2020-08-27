import React from 'react';
import { Visible } from 'react-grid-system';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

import { EstablishmentTypes } from 'config/constants';
import juntosLogoMobile from 'assets/images/juntos-logo-mobile.svg';
import logoFmc from 'assets/images/indication/logo-fmc.svg';
import logoRevenda from 'assets/images/logo-revenda.svg';
import logoCooperativa from 'assets/images/logo-cooperativa.svg';

import { Container, Content, FmcLogoWrapper } from './styles';

interface Props {
  className?: string;
  logoType?: EstablishmentTypes;
}
const Logo: React.FC<Props> = ({
  className,
  logoType = EstablishmentTypes.Resale,
}) => {
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
          {logoType === EstablishmentTypes.Resale ? (
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
