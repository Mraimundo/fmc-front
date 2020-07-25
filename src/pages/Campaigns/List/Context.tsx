import React, { useEffect, createContext, useState, useContext } from 'react';
import { getCampaigns, getCampaignsDetails } from 'services/campaignsManager';
import { Response as IDetails } from 'services/campaignsManager/getCampaignsDetails';
import { Campaign } from 'services/campaignsManager/interfaces/Campaign';

export interface CampaignsListContextState {
  campaigns: Campaign[];
  isFetching: boolean;
  resume: IDetails[];
}

const CampaignsListContext = createContext<CampaignsListContextState>(
  {} as CampaignsListContextState,
);

export const CampaignsListProvider: React.FC = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [resume, setResume] = useState<IDetails[]>([]);

  useEffect(() => {
    setIsFetching(true);
    getCampaigns()
      .then(({ data, pagination }) => setCampaigns(data))
      .finally(() => setIsFetching(false));
  }, []);

  useEffect(() => {
    getCampaignsDetails().then(data => {
      setResume(data);
    });
  }, []);

  return (
    <CampaignsListContext.Provider value={{ campaigns, isFetching, resume }}>
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
