import React, {
  useEffect,
  createContext,
  useState,
  useContext,
  useCallback,
} from 'react';

import { Pagination } from 'config/constants/vendavallPaginationInterface';
import {
  getCampaigns,
  getCampaignsDetails,
  approveCampaign,
  disapproveCampaign,
  toggleCampaignPublishedStatus,
  addHighlightToCampaign,
  removeHighlightFromCampaign,
} from 'services/campaigns-manager';
import { FilterOptions } from 'services/campaigns-manager/getCampaigns';
import { Response as IDetails } from 'services/campaigns-manager/getCampaignsDetails';
import {
  Campaign,
  Approver,
} from 'services/campaigns-manager/interfaces/Campaign';
import { useAuth } from 'context/AuthContext';
import produce from 'immer';

export interface CampaignsListContextState {
  campaigns: Campaign[];
  isFetching: boolean;
  resume: IDetails[];
  applyFilters(filters?: FilterOptions): void;
  approvalModalOpened: boolean;
  openApprovalModal(): void;
  closeApprovalModal(): void;
  campaignSelected: Campaign | null;
  selectCampaign(campaignId: number): void;
  disapprove(approver: Approver): Promise<void>;
  approve(approver: Approver): Promise<void>;
  togglePublishedStatus(campaignId: number): Promise<void>;
  addHighlight(campaignId: number): Promise<void>;
  removeHighlight(highlightId: number): Promise<void>;
  setPage(page: number): void;
  pagination: Pagination | null;
}

const CampaignsListContext = createContext<CampaignsListContextState>(
  {} as CampaignsListContextState,
);

export const CampaignsListProvider: React.FC = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [campaignSelected, setCampaignSelected] = useState<Campaign | null>(
    null,
  );
  const [resume, setResume] = useState<IDetails[]>([]);
  const [approvalModalOpened, setApprovalModalOpened] = useState(false);

  const [filters, setFilters] = useState<FilterOptions | undefined>(undefined);

  const { participant } = useAuth();

  useEffect(() => {
    if (!participant.id) return;
    getCampaignsDetails(participant.id).then(data => {
      setResume(data);
    });
  }, [participant.id]);

  const applyFilters = useCallback((_filters?: FilterOptions) => {
    setFilters({ ..._filters, page: 1 });
  }, []);

  const setPage = useCallback((page: number): void => {
    setFilters(oldFilters => ({ ...oldFilters, page }));
  }, []);

  useEffect(() => {
    setIsFetching(true);
    getCampaigns(filters)
      .then(({ data, pagination: apiPagination }) => {
        setCampaigns(data);
        setPagination(apiPagination);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [filters]);

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

  const approve = useCallback(
    async ({ comments, profile }: Approver) => {
      if (!campaignSelected || !campaignSelected.id) return;
      await approveCampaign(campaignSelected.id, comments[0]);
      setCampaigns(data =>
        produce(data, draft => {
          const index = draft.findIndex(
            item => item.id === campaignSelected.id,
          );
          if (index >= 0) {
            draft[index] = {
              ...draft[index],
              approvers: [
                ...draft[index].approvers.map(item => {
                  if (item.profile === profile) {
                    item.status = 'approved';
                  }
                  return item;
                }),
              ],
            };
          }
        }),
      );
    },
    [campaignSelected],
  );

  const disapprove = useCallback(
    async ({ comments, profile }: Approver) => {
      if (!campaignSelected || !campaignSelected.id) return;
      await disapproveCampaign(campaignSelected.id, comments[0]);
      setCampaigns(data =>
        produce(data, draft => {
          const index = draft.findIndex(
            item => item.id === campaignSelected.id,
          );
          if (index >= 0) {
            draft[index] = {
              ...draft[index],
              approvers: [
                ...draft[index].approvers.map(item => {
                  if (item.profile === profile) {
                    item.status = 'disapproved';
                  }
                  return item;
                }),
              ],
            };
          }
        }),
      );
    },
    [campaignSelected],
  );

  const togglePublishedStatus = useCallback(async (campaignId: number): Promise<
    void
  > => {
    await toggleCampaignPublishedStatus(campaignId);
  }, []);

  const addHighlight = useCallback(async (campaignId: number): Promise<
    void
  > => {
    const id = await addHighlightToCampaign(campaignId);
    setCampaigns(data =>
      produce(data, draft => {
        const index = draft.findIndex(item => item.id === campaignId);
        if (index >= 0) {
          draft[index] = {
            ...draft[index],
            highlight: {
              id,
              status: true,
            },
          };
        }
      }),
    );
  }, []);

  const removeHighlight = useCallback(async (highlightId: number): Promise<
    void
  > => {
    await removeHighlightFromCampaign(highlightId);
    setCampaigns(data =>
      data.map(item => {
        if (item.highlight.id === highlightId) {
          return { ...item, highlight: { id: null, status: false } };
        }
        return item;
      }),
    );
  }, []);

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
        approve,
        disapprove,
        togglePublishedStatus,
        addHighlight,
        removeHighlight,
        setPage,
        pagination,
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
