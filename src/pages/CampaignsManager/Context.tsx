import React, { createContext, useState, useContext, useCallback } from 'react';
import tabs from './tabs';

interface CampaignsManagerContextState {
  tabs: string[];
  tabSelected: string;
  selectTab(tab: string): void;
}

const CampaignsManagerContext = createContext<CampaignsManagerContextState>(
  {} as CampaignsManagerContextState,
);

export const CampaignsManagerProvider: React.FC = ({ children }) => {
  const [tabSelected, setTabSelected] = useState(() => tabs[0]);

  const selectTab = useCallback((tab: string) => {
    setTabSelected(tab);
  }, []);

  return (
    <CampaignsManagerContext.Provider value={{ tabs, tabSelected, selectTab }}>
      {children}
    </CampaignsManagerContext.Provider>
  );
};

export const useCampaignsManager = (): CampaignsManagerContextState => {
  const context = useContext(CampaignsManagerContext);
  if (!context) {
    throw new Error(
      'useCampaignsManager must be used within a ResultsProviderProvider',
    );
  }
  return context;
};
