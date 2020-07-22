import React, { createContext, useState, useContext } from 'react';

export interface CampaignsListContextState {
  test: string;
}

const CampaignsListContext = createContext<CampaignsListContextState>(
  {} as CampaignsListContextState,
);

export const CampaignsListProvider: React.FC = ({ children }) => {
  const [test, setTest] = useState('');

  return (
    <CampaignsListContext.Provider value={{ test }}>
      {children}
    </CampaignsListContext.Provider>
  );
};

export const useCampaignsList = (): CampaignsListContextState => {
  const context = useContext(CampaignsListContext);
  if (!context) {
    throw new Error(
      'useCampaignsList must be used within a ResultsProviderProvider',
    );
  }
  return context;
};
