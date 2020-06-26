import React from 'react';

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
        <img src={logoFmc} alt="Logo FMC" />
        <img src={logoJuntos} alt="Logo Juntos" />
      </Content>
    </Container>
  );
};

export default Logo;
