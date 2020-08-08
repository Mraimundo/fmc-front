import React from 'react';
import { render } from '@testing-library/react';
import { ThemeContext } from 'styled-components';

import { defaultTheme } from 'styles/theme';
import MarketplacePoints from '.';

describe('<MarketplacePoints />', () => {
  test('should be in the document', () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <ThemeContext.Provider value={defaultTheme}>
        <MarketplacePoints onChange={onChange} marketplacePoints={200} />,
      </ThemeContext.Provider>,
    );

    expect(getByText(/RESGATE NO CATÁLOGO DE PRÊMIOS/)).toBeInTheDocument();
  });
});
