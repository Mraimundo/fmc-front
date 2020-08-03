import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, getByTestId } from '@testing-library/react';

import { banners } from 'state/modules/home/mock';
import Banners from '.';

describe('<Banners />', () => {
  test('should render banners', () => {
    const { container } = render(<Banners items={banners} />);
    expect(getByTestId(container, /banners/)).toBeInTheDocument();
  });
});
