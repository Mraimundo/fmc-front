import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import ParticipantWidgetDistribution from '.';

describe('<ParticipantWidgetDistribution />', () => {
  it('should render correctly', () => {
    const { getByAltText, getByText, container } = render(
      <ParticipantWidgetDistribution
        picture="picture.png"
        name="Gabriel Ferreira"
      />,
    );

    expect(getByAltText(/Gabriel Ferreira/)).toBeInTheDocument();
    expect(getByText(/Distribuir/)).toBeInTheDocument();
    expect(
      getByTestId(container, 'participant-widget-distribution'),
    ).toBeInTheDocument();
  });
});
