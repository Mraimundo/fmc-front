import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import CooperativeDistributionPoints from './CooperativeDistributionPoints';

describe('<CooperativeDistributionPoints />', () => {
  const handleDistributePoints = jest.fn();
  it('should render without points to distribute', () => {
    const { getByText } = render(
      <CooperativeDistributionPoints
        handleDistributePoints={handleDistributePoints}
      />,
    );

    expect(
      getByText(/TOTAL PONTOS COOPERATIVA PARA DISTRIBUIR 0/),
    ).toBeInTheDocument();
  });

  it('should render with points to distribute', () => {
    const { getByText } = render(
      <CooperativeDistributionPoints
        handleDistributePoints={handleDistributePoints}
        totalPointsToDistrute={2000}
      />,
    );

    expect(
      getByText(/TOTAL PONTOS COOPERATIVA PARA DISTRIBUIR 2000/),
    ).toBeInTheDocument();
  });

  it('button to distribute should be disabled when not finished to distribute yet', () => {
    const { container } = render(
      <CooperativeDistributionPoints
        handleDistributePoints={handleDistributePoints}
        totalPointsToDistrute={2000}
        teamPoints={1000}
        cooperativePoints={500}
      />,
    );

    const distributePointsBtn = getByTestId(
      container,
      'button-distribute-points-cooperative',
    );
    fireEvent.click(distributePointsBtn);
    expect(handleDistributePoints).not.toHaveBeenCalled();
  });

  it('button to distribute should be enabled when finished distribution', () => {
    const { container } = render(
      <CooperativeDistributionPoints
        handleDistributePoints={handleDistributePoints}
        totalPointsToDistrute={2000}
        teamPoints={1000}
        cooperativePoints={1000}
      />,
    );

    const distributePointsBtn = getByTestId(
      container,
      'button-distribute-points-cooperative',
    );
    fireEvent.click(distributePointsBtn);
    expect(handleDistributePoints).toHaveBeenCalled();
  });
});
