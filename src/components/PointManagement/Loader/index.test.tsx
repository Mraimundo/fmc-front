import React from 'react';
import { render } from '@testing-library/react';

import Loader from '.';

describe('<Loader />', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Loader>buscando cargos...</Loader>);

    expect(getByText(/buscando cargos.../)).toBeInTheDocument();
  });
});
