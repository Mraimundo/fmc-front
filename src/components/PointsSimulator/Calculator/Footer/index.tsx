import React from 'react';

import { formatPoints } from 'util/points';
import { Container, Button } from './styles';

interface Props {
  dollarBaseValue: number;
  buttonActionText: string;
  handleButtonAction(): void;
}

const Footer: React.FC<Props> = props => {
  const { dollarBaseValue, handleButtonAction, buttonActionText } = props;

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
          {buttonActionText}
        </Button>
      </div>
    </Container>
  );
};

export default Footer;
