import React from 'react';
import { ReactSVG } from 'react-svg';

import shareImg from 'assets/images/points-simulator/share.svg';
import { Container, Button } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <span>
        Os resultados acima são meramente uma simulação e não podem ser
        utilizados para qualquer tipo de premiação
      </span>
      <div>
        <ReactSVG src={shareImg} />
        <Button buttonRole="primary" type="button">
          Salvar Simulação
        </Button>
      </div>
    </Container>
  );
};

export default Footer;
