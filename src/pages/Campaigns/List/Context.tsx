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
  approvalModalOpened: boolean;
  openApprovalModal(): void;
  closeApprovalModal(): void;
  campaignSelected: Campaign | null;
  selectCampaign(campaignId: number): void;
}

const CampaignsListContext = createContext<CampaignsListContextState>(
  {} as CampaignsListContextState,
);

export const CampaignsListProvider: React.FC = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [campaignSelected, setCampaignSelected] = useState<Campaign | null>(
    null,
  );
  const [resume, setResume] = useState<IDetails[]>([]);
  const [approvalModalOpened, setApprovalModalOpened] = useState(false);

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

  const openApprovalModal = useCallback(() => {
    setApprovalModalOpened(true);
  }, []);

  const closeApprovalModal = useCallback(() => {
    setApprovalModalOpened(false);
  }, []);

  const selectCampaign = useCallback(
    (campaignId: number) => {
      const foundItem = campaigns.find(item => item.id === campaignId);
      if (foundItem) {
        setCampaignSelected(foundItem);
      }
    },
    [campaigns],
  );

  return (
    <CampaignsListContext.Provider
      value={{
        campaigns,
        isFetching,
        resume,
        applyFilters,
        approvalModalOpened,
        openApprovalModal,
        closeApprovalModal,
        campaignSelected,
        selectCampaign,
      }}
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
