import React, { useMemo } from 'react';
import { Visible } from 'react-grid-system';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

import { EstablishmentTypes } from 'config/constants';
import juntosLogoMobile from 'assets/images/juntos-logo-mobile.svg';
import logoFmc from 'assets/images/indication/logo-fmc.svg';
import logoRevenda from 'assets/images/logo-revenda.svg';
import logoCooperativa from 'assets/images/logo-cooperativa.svg';
import logoEquipe from 'assets/images/logo-equipe.svg';
import logoProdutor from 'assets/images/logo-produtor.svg';

import { Container, Content, FmcLogoWrapper } from './styles';

type LogoType = EstablishmentTypes | 'fmcTeam' | 'fmcProdutor';

interface Props {
  className?: string;
  logoType?: LogoType;
}
const Logo: React.FC<Props> = ({
  className,
  logoType = EstablishmentTypes.Resale,
}) => {
  const logoToShow = useMemo(
    () => ({
      [EstablishmentTypes.Resale]: <ReactSVG src={logoRevenda} />,
      [EstablishmentTypes.Cooperative]: <ReactSVG src={logoCooperativa} />,
      fmcTeam: <ReactSVG src={logoEquipe} />,
      fmcProdutor: <ReactSVG src={logoProdutor} />,
    }),
    [],
  );

  return (
    <Container className={className}>
      <Content>
        <FmcLogoWrapper>
          <Link to="/home">
            <ReactSVG src={logoFmc} />
          </Link>
        </FmcLogoWrapper>
        <Visible xs sm md lg>
          <img src={juntosLogoMobile} alt="" title="" />
        </Visible>
        <Visible xl xxl>
          {logoToShow[logoType]}
        </Visible>
      </Content>
    </Container>
  );
};

export default Logo;
