import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, getByTestId } from '@testing-library/react';

import { Badge } from 'state/modules/header/constants';
import ParticipantBadge from '.';

describe('<ParticipantBadge />', () => {
  test('should render correctly land badge', () => {
    const { container } = render(<ParticipantBadge badge={Badge.Land} />);
    expect(getByTestId(container, /badge-land/)).toBeInTheDocument();
  });

  test('should render correctly root badge', () => {
    const { container } = render(<ParticipantBadge badge={Badge.Root} />);
    expect(getByTestId(container, /badge-root/)).toBeInTheDocument();
  });

  test('should render correctly seed badge', () => {
    const { container } = render(<ParticipantBadge badge={Badge.Seed} />);
    expect(getByTestId(container, /badge-seed/)).toBeInTheDocument();
  });

  test('should render correctly water badge', () => {
    const { container } = render(<ParticipantBadge badge={Badge.Water} />);
    expect(getByTestId(container, /badge-water/)).toBeInTheDocument();
  });
});
