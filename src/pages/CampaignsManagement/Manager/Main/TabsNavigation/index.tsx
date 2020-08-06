import React from 'react';
import { useCampaignsManager } from '../../Context';

import { Container, Box } from './styles';

const TabsNavigation: React.FC = () => {
  const { selectTab, tabSelected, tabs } = useCampaignsManager();
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

export default TabsNavigation;
