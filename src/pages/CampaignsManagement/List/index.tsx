import React from 'react';
import { CampaignsListProvider } from './Context';
import Main from './Main';

const CampaignsManager: React.FC = () => {
  return (
    <CampaignsListProvider>
      <Main />
    </CampaignsListProvider>
  );
};

export default CampaignsManager;
