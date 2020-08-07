import React from 'react';
import { expect as expectChai } from 'chai';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import { ThemeContext } from 'styled-components';

import { defaultTheme } from 'styles/theme';
import ParticipantsFinder from '.';

describe('<ParticipantsFinder />', () => {
  test('should render correctly', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <ThemeContext.Provider value={defaultTheme}>
        <ParticipantsFinder onChange={handleChange} />
      </ThemeContext.Provider>,
    );

    expect(
      getByTestId(container, /participants-finder-input/),
    ).toBeInTheDocument();
  });

  test('should handle chang correctly', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <ThemeContext.Provider value={defaultTheme}>
        <ParticipantsFinder onChange={handleChange} />
      </ThemeContext.Provider>,
    );

    fireEvent.change(getByTestId(container, /participants-finder-input/), {
      target: { value: 'Gabri' },
    });
    expectChai(
      getByTestId(container, /participants-finder-input/).value,
    ).to.be.equal('Gabri');
  });
});
