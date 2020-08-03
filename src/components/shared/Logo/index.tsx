import React from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

import logoFmc from 'assets/images/indication/logo-fmc.svg';
import logoJuntos from 'assets/images/indication/logo-juntos.svg';

import { Container, Content } from './styles';

interface Props {
  className?: string;
}
const Logo: React.FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <Content>
        <Link to="/">
          <ReactSVG src={logoFmc} />
        </Link>
        <ReactSVG src={logoJuntos} />
      </Content>
    </Container>
  );
};

export default Logo;
