import React, { createContext, useState, useContext } from 'react';

export interface NewCampaignContextState {
  test: string;
}

const NewCampaignContext = createContext<NewCampaignContextState>(
  {} as NewCampaignContextState,
);

export const NewCampaignProvider: React.FC = ({ children }) => {
  const [test, setTest] = useState('');

  return (
    <NewCampaignContext.Provider value={{ test }}>
      {children}
    </NewCampaignContext.Provider>
  );
};

export const useNewCampaign = (): NewCampaignContextState => {
  const context = useContext(NewCampaignContext);
  if (!context) {
    throw new Error(
      'useNewCampaign must be used within a ResultsProviderProvider',
    );
  }
  return context;
};
