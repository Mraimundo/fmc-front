import React, { createContext, useState, useContext, useCallback } from 'react';
import { Campaign } from 'services/campaignsManager/interfaces/Campaign';
import tabs from './tabs';

export interface CampaignsManagerContextState {
  tabs: string[];
  tabSelected: string;
  selectTab(tab: string): void;
  campaign: Campaign;
}

const CampaignsManagerContext = createContext<CampaignsManagerContextState>(
  {} as CampaignsManagerContextState,
);

interface ProviderProps {
  campaign: Campaign;
}

export const CampaignsManagerProvider: React.FC<ProviderProps> = ({
  campaign: initialValues,
  children,
}) => {
  const [tabSelected, setTabSelected] = useState(() => tabs[0]);
  const [campaign, setCampaign] = useState<Campaign>(initialValues);

  const selectTab = useCallback((tab: string) => {
    setTabSelected(tab);
  }, []);

  return (
    <CampaignsManagerContext.Provider
      value={{ tabs, tabSelected, selectTab, campaign }}
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
