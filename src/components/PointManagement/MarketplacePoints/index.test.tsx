import React from 'react';
import { render } from '@testing-library/react';

import MarketplacePoints from '.';

describe('<MarketplacePoints />', () => {
  test('should be in the document', () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <MarketplacePoints onChange={onChange} marketplacePoints={200} />,
    );

    expect(getByText(/RESGATE NO MARKETPLACE/)).toBeInTheDocument();
  });
});
