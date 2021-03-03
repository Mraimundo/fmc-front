import React from 'react';
import { useCampaignsManager } from '../../Context';

import { Container, Box } from './styles';

interface TabsNavigationProps {
  isViewing?: boolean;
}

const TabsNavigation: React.FC<TabsNavigationProps> = ({
  isViewing = false,
}) => {
  const { selectTab, tabSelected, tabs, viewTabs } = useCampaignsManager();
  console.log(viewTabs);
  return (
    <Container>
      {(!isViewing ? tabs : viewTabs).map(item => (
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
