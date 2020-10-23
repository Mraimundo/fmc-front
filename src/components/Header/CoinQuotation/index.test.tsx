import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import { ThemeContext } from 'styled-components';

import { defaultTheme } from 'styles/theme';
import { Coin } from 'state/modules/header/types';
import { coinQuotations } from 'state/modules/header/mock';
import { fakeFormatDollars } from 'util/points';
import CoinQuotation from '.';

describe('<CoinQuotation />', () => {
  test('should render coin quotations list', () => {
    const { container } = render(
      <ThemeContext.Provider value={defaultTheme}>
        <CoinQuotation quotations={coinQuotations} />
      </ThemeContext.Provider>,
    );
    expect(getByTestId(container, /coin-quotations-list/)).toBeInTheDocument();
  });

  test('should render all coins', () => {
    const { getByText } = render(
      <ThemeContext.Provider value={defaultTheme}>
        <CoinQuotation quotations={coinQuotations} />
      </ThemeContext.Provider>,
    );

    coinQuotations.map((coin: Coin) =>
      expect(
        getByText(`R$ ${fakeFormatDollars(coin.value, 2, 3)}`),
      ).toBeInTheDocument(),
    );
  });
});
