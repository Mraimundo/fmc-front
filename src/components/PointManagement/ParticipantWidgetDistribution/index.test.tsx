import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import { ThemeContext } from 'styled-components';

import { defaultTheme } from 'styles/theme';
import { participant } from 'state/modules/point-management/team-awards/mock';
import ParticipantWidgetDistribution from '.';

describe('<ParticipantWidgetDistribution />', () => {
  test('should render correctly', () => {
    const { getByAltText, getByText, container } = render(
      <ThemeContext.Provider value={defaultTheme}>
        <ParticipantWidgetDistribution
          isAllowedToScore
          isSelected
          score={1200}
          participant={participant}
          onToggleParticipant={() => jest.fn()}
          onScoreParticipant={() => jest.fn()}
        />
      </ThemeContext.Provider>,
    );

    expect(getByAltText(participant.name)).toBeInTheDocument();
    expect(getByText(/Distribuir/)).toBeInTheDocument();
    expect(
      getByTestId(container, 'participant-widget-distribution'),
    ).toBeInTheDocument();
  });
});
