import React from 'react';

import Main from 'components/HarvestTerm/Main';
import { HarvestTermsProvider } from 'components/HarvestTerm/Context';
import { Container } from './styles';

const HarvestTerm: React.FC = () => {
  return (
    <Container>
      <HarvestTermsProvider>
        <Main />
      </HarvestTermsProvider>
    </Container>
  );
};

export default HarvestTerm;
