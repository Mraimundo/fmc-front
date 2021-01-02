import React from 'react';
import { ReactSVG } from 'react-svg';

import shareImg from 'assets/images/points-simulator/share.svg';
import { Container, Button } from './styles';

interface Props {
  handleSaveSimulationClick(): void;
}

const Footer: React.FC<Props> = ({ handleSaveSimulationClick }) => {
  return (
    <Container>
      <span>
        Os resultados acima são meramente uma simulação e não podem ser
        utilizados para qualquer tipo de premiação
      </span>
      <div className="_actions-container-footer">
        <ReactSVG src={shareImg} />
        <Button
          buttonRole="primary"
          type="button"
          onClick={handleSaveSimulationClick}
        >
          Salvar Simulação
        </Button>
      </div>
    </Container>
  );
};

export default Footer;
