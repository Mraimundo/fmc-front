import React from 'react';
import { expect as expectChai } from 'chai';
import { render, getByTestId, fireEvent } from '@testing-library/react';

import ParticipantsFinder from '.';

describe('<ParticipantsFinder />', () => {
  it('should render correctly', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <ParticipantsFinder onChange={handleChange} />,
    );

    expect(
      getByTestId(container, /participants-finder-input/),
    ).toBeInTheDocument();
  });

  it('should handle chang correctly', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <ParticipantsFinder onChange={handleChange} />,
    );

    fireEvent.change(getByTestId(container, /participants-finder-input/), {
      target: { value: 'Gabri' },
    });
    expectChai(
      getByTestId(container, /participants-finder-input/).value,
    ).to.be.equal('Gabri');
  });
});
