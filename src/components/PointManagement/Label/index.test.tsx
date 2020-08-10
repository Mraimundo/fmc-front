import React from 'react';
import { render } from '@testing-library/react';
import { ThemeContext } from 'styled-components';

import { defaultTheme } from 'styles/theme';
import Label from '.';

describe('<Label />', () => {
  test('should render correctly', () => {
    const { getByText } = render(
      <ThemeContext.Provider value={defaultTheme}>
        <Label>filtrar filial</Label>
      </ThemeContext.Provider>,
    );

    expect(getByText(/filtrar filial/)).toBeInTheDocument();
  });
});
