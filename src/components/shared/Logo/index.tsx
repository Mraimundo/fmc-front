import React from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

import logoFmc from 'assets/images/indication/logo-fmc.svg';
import logoRevenda from 'assets/images/indication/logo-juntos.svg';
import logoCooperativa from 'assets/images/indication/logo-fmc.svg';

import { Container, Content } from './styles';

interface Props {
  className?: string;
  logoType?: 'Revenda' | 'Cooperativa';
}
const Logo: React.FC<Props> = ({ className, logoType = 'Revenda' }) => {
  return (
    <Container className={className}>
      <Content>
        <Link to="/">
          <ReactSVG src={logoFmc} />
        </Link>
        {logoType === 'Revenda' ? (
          <ReactSVG src={logoRevenda} />
        ) : (
          <ReactSVG src={logoCooperativa} />
        )}
      </Content>
    </Container>
  );
};

export default Logo;
