import React from 'react';

import { formatQuotedCoin } from 'util/points';
import { Coin } from 'state/modules/header/types';
import { QuotationsList, Value } from './styles';

interface CoinQuotationProps {
  quotations: Coin[];
}
const CoinQuotation: React.FC<CoinQuotationProps> = ({ quotations }) => {
  return (
    <QuotationsList data-testid="coin-quotations-list">
      {quotations.map((coin: Coin) => (
        <li key={coin.name}>
          {coin.name}: <Value>R$ {formatQuotedCoin(coin.value)}</Value>
        </li>
      ))}
    </QuotationsList>
  );
};

export default CoinQuotation;
