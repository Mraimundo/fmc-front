import React, { createContext, useState, useContext, useCallback } from 'react';
import tabs, { viewTabs } from './tabs';

export interface CampaignsManagerContextState {
  tabs: string[];
  tabSelected: string;
  selectTab(tab: string): void;
  nextTab(): void;
  viewTabs: string[];
}

const CampaignsManagerContext = createContext<CampaignsManagerContextState>(
  {} as CampaignsManagerContextState,
);

export const CampaignsManagerProvider: React.FC = ({ children }) => {
  const [tabSelected, setTabSelected] = useState(() => tabs[0]);

  const selectTab = useCallback((tab: string) => {
    setTabSelected(tab);
  }, []);

  const nextTab = useCallback(() => {
    const tabIndex = tabs.indexOf(tabSelected);
    if (tabIndex < tabs.length - 1) {
      setTabSelected(tabs[tabIndex + 1]);
    }
  }, [tabSelected]);

  return (
    <CampaignsManagerContext.Provider
      value={{ tabs, tabSelected, selectTab, nextTab, viewTabs }}
    >
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
