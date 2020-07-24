import React from 'react';
import { render } from '@testing-library/react';
import { queryByTestId } from '@testing-library/dom';
import { ThemeContext } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import Button from '.';

describe('<Button />', () => {
  it('should render loader', () => {
    const text = 'Click here!';
    const { container } = render(
      <ThemeContext.Provider value={defaultTheme}>
        <Button buttonRole="primary" type="button" loading>
          {text}
        </Button>
      </ThemeContext.Provider>,
    );

    expect(queryByTestId(container, /button-loader/)).toBeInTheDocument();
  });

  it('should render with children', () => {
    const text = 'Click here!';
    const { getByText } = render(
      <ThemeContext.Provider value={defaultTheme}>
        <Button buttonRole="primary" type="button">
          {text}
        </Button>
      </ThemeContext.Provider>,
    );

    expect(getByText(text)).toBeInTheDocument();
  });
});
