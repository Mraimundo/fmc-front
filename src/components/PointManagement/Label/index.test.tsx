import React from 'react';
import { render } from '@testing-library/react';

import Label from '.';

describe('<Label />', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Label>filtrar filial</Label>);

    expect(getByText(/filtrar filial/)).toBeInTheDocument();
  });
});
