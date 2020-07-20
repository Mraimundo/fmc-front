import React from 'react';
import { CampaignsManagerProvider } from './Context';
import Main from './Main';

const CampaignsManager: React.FC = () => {
  return (
    <CampaignsManagerProvider>
      <Main />
    </CampaignsManagerProvider>
  );
};

export default CampaignsManager;
