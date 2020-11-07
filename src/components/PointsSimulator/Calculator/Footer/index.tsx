import React from 'react';

import { formatPoints } from 'util/points';
import { Container, Button } from './styles';

interface Props {
  dollarBaseValue: number;
  handleButtonAction(): void;
}

const Footer: React.FC<Props> = ({ dollarBaseValue, handleButtonAction }) => {
  return (
    <Container>
      <div>
        <span>Dólar base</span>
        <span>US$</span>
        <strong>{formatPoints(dollarBaseValue)}</strong>
      </div>
      <div>
        <span>Itens adicionados (00)</span>
        <Button
          buttonRole="tertiary"
          type="button"
          onClick={handleButtonAction}
        >
          Calcular
        </Button>
      </div>
    </Container>
  );
};

export default Footer;
