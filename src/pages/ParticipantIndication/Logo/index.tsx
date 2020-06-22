import React from 'react';

import logoFmc from 'assets/images/indication/logo-fmc.svg';
import logoJuntos from 'assets/images/indication/logo-juntos.svg';

import { Container } from './styles';

const Logo: React.FC = () => {
  return (
    <Container>
      <img src={logoFmc} alt="Logo FMC" />
      <img src={logoJuntos} alt="Logo Juntos" />
    </Container>
  );
};

export default Logo;
