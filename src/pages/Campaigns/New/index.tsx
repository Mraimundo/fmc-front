import React from 'react';
import { NewCampaignProvider } from './Context';
import Main from './Main';

const CampaignsManager: React.FC = () => {
  return (
    <NewCampaignProvider>
      <Main />
    </NewCampaignProvider>
  );
};

export default CampaignsManager;
