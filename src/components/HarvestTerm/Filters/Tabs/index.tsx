import React from 'react';

import { useHarvestTermsContext } from 'components/HarvestTerm/Context';
import { Container, Box } from './styles';

const Tabs: React.FC = () => {
  const { tabs, tabSelected, selectTab } = useHarvestTermsContext();

  return (
    <Container>
      {tabs.map(item => (
        <Box
          key={item}
          onClick={() => selectTab(item)}
          selected={item === tabSelected}
        >
          {item}
        </Box>
      ))}
    </Container>
  );
};

export default Tabs;
