import React from 'react';
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
          <img src={logoFmc} alt="Logo FMC" />
        </Link>
        <img src={logoJuntos} alt="Logo Juntos" />
      </Content>
    </Container>
  );
};

export default Logo;
