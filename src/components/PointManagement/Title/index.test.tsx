import React from 'react';
import { render } from '@testing-library/react';

import Title from '.';

describe('<Title />', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Title>titulo de teste</Title>);

    expect(getByText(/titulo de teste/)).toBeInTheDocument();
  });
});
