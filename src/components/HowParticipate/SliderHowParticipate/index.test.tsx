import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { ThemeContext } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import { render, getByTestId } from '@testing-library/react';

import { banners } from 'state/modules/home/mock';
import Banners from '.';

Object.defineProperty(window, 'matchMedia', {
  value: () => ({
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }),
});

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: jest.fn(),
  }),
});

describe('<Banners />', () => {
  test('should render banners', () => {
    const { container } = render(
      <ThemeContext.Provider value={defaultTheme}>
        <Banners items={banners} />
      </ThemeContext.Provider>,
    );
    expect(getByTestId(container, /banners/)).toBeInTheDocument();
  });
});
