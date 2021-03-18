import React from 'react';

import Main from 'components/HarvestTerm/Main';

import { HarvestTermsProvider } from 'components/HarvestTerm/Context';

const HarvestTerm: React.FC = () => {
  return (
    <HarvestTermsProvider>
      <Main />
    </HarvestTermsProvider>
  );
};

export default HarvestTerm;
