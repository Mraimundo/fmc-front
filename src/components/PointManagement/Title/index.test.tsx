import React from 'react';
import { render } from '@testing-library/react';
import { ThemeContext } from 'styled-components';

import { defaultTheme } from 'styles/theme';
import Title from '.';

describe('<Title />', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <ThemeContext.Provider value={defaultTheme}>
        <Title>titulo de teste</Title>
      </ThemeContext.Provider>,
    );

    expect(getByText(/titulo de teste/)).toBeInTheDocument();
  });
});
