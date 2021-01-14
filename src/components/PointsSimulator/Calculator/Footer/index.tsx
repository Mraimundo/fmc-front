import React, { useCallback, useState } from 'react';
import numbersOnly from 'util/numbersOnly';

import { formatPoints } from 'util/points';
import { Container, Button } from './styles';

interface Props {
  dollarBaseValue: number;
  changeDollarBaseValue(dollarValue: number): void;
  buttonActionText: string;
  handleButtonAction(): void;
  quantityItemsAdded: number;
}

const Footer: React.FC<Props> = ({
  dollarBaseValue,
  handleButtonAction,
  buttonActionText,
  quantityItemsAdded,
  changeDollarBaseValue,
}) => {
  const [inputValue, setInputValue] = useState(formatPoints(dollarBaseValue));

  const handleDollarChange = useCallback(() => {
    changeDollarBaseValue(
      parseFloat(inputValue.replace(/\./gi, '').replace(/,/gi, '.')),
    );
  }, [changeDollarBaseValue, inputValue]);

  return (
    <Container className="_footer-dolar-container">
      <div>
        <span>Dólar base</span>
        <span>US$</span>
        <input
          type="text"
          value={inputValue}
          onChange={e => {
            setInputValue(
              formatPoints(
                parseFloat(numbersOnly(e.currentTarget.value)) / 100,
              ),
            );
          }}
          onBlur={handleDollarChange}
          disabled={buttonActionText !== 'Calcular'}
        />
      </div>
      <div>
        <span>Itens adicionados ({quantityItemsAdded})</span>
        <Button
          buttonRole="tertiary"
          type="button"
          onClick={handleButtonAction}
          className="_calculator-action-button"
        >
          {buttonActionText}
        </Button>
      </div>
    </Container>
  );
};

export default Footer;
