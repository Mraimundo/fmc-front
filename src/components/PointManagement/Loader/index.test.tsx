import React from 'react';
import { render } from '@testing-library/react';
import { ThemeContext } from 'styled-components';

import { defaultTheme } from 'styles/theme';
import Loader from '.';

describe('<Loader />', () => {
  test('should render correctly', () => {
    const { getByText } = render(
      <ThemeContext.Provider value={defaultTheme}>
        <Loader>buscando cargos...</Loader>
      </ThemeContext.Provider>,
    );

    expect(getByText(/buscando cargos.../)).toBeInTheDocument();
  });
});
