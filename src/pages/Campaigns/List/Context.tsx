import React, {
  useEffect,
  createContext,
  useState,
  useContext,
  useCallback,
} from 'react';
import { getCampaigns, getCampaignsDetails } from 'services/campaignsManager';
import { FilterOptions } from 'services/campaignsManager/getCampaigns';
import { Response as IDetails } from 'services/campaignsManager/getCampaignsDetails';
import { Campaign } from 'services/campaignsManager/interfaces/Campaign';
import { useAuth } from 'context/AuthContext';

export interface CampaignsListContextState {
  campaigns: Campaign[];
  isFetching: boolean;
  resume: IDetails[];
  applyFilters(filters?: FilterOptions): Promise<void>;
}

const CampaignsListContext = createContext<CampaignsListContextState>(
  {} as CampaignsListContextState,
);

export const CampaignsListProvider: React.FC = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [resume, setResume] = useState<IDetails[]>([]);

  const { participant } = useAuth();

  useEffect(() => {
    setIsFetching(true);
    getCampaigns()
      .then(({ data }) => setCampaigns(data))
      .finally(() => setIsFetching(false));
  }, []);

  useEffect(() => {
    if (!participant.id) return;
    getCampaignsDetails(participant.id).then(data => {
      setResume(data);
    });
  }, [participant.id]);

  const applyFilters = useCallback(async (filters?: FilterOptions) => {
    setIsFetching(true);
    const { data } = await getCampaigns(filters);
    setCampaigns(data);
    setIsFetching(false);
  }, []);

  return (
    <CampaignsListContext.Provider
      value={{ campaigns, isFetching, resume, applyFilters }}
    >
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
