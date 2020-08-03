import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { Router } from 'react-router-dom';
import { render, getByTestId } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { ThemeContext } from 'styled-components';

import { defaultTheme } from 'styles/theme';
import HelpBalloon from '.';

describe('<HelpBalloon />', () => {
  test('should render help balloon', () => {
    const history = createMemoryHistory();

    const { container } = render(
      <Router history={history}>
        <ThemeContext.Provider value={defaultTheme}>
          <HelpBalloon />
        </ThemeContext.Provider>
      </Router>,
    );
    expect(getByTestId(container, 'help-balloon')).toBeInTheDocument();
  });

  test('should render menu', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <ThemeContext.Provider value={defaultTheme}>
          <HelpBalloon />
        </ThemeContext.Provider>
      </Router>,
    );

    expect(getByText('FAQ')).toBeInTheDocument();
    expect(getByText('Fale conosco')).toBeInTheDocument();
  });
});
