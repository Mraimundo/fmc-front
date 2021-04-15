import React, {
  useEffect,
  createContext,
  useState,
  useContext,
  useCallback,
} from 'react';

import {
  Farmer,
  FilterOptions,
  Summary,
  ReproveMessage,
} from 'services/producer-approval/interface';
import { Pagination } from 'config/constants/vendavallPaginationInterface';
import {
  getFarmers,
  getSummary,
  approveFarmerRequest,
  reproveFarmerRequest,
  getReproveMessage as getReproveMotive,
  getExport,
} from 'services/producer-approval';

import { useToast } from 'context/ToastContext';

export enum Tab {
  waiting = 'waiting',
  approved = 'approved',
  rejected = 'rejected',
}

interface FarmersContextState {
  farmers: Farmer[];
  summary: Summary | null;
  isFetching: boolean;
  selectedTab: Tab;
  setTab: (tab: Tab) => void;
  applySearch: (search: string) => void;
  pagination: Pagination | null;
  setPage: (page: number) => void;
  approvalModalIsOpen: boolean;
  setApprovalModalIsOpen: (value: boolean) => void;
  selectedFarmerRequestId: number | null;
  setSelectedFarmerRequestId: (farmerId: number) => void;
  approveFarmer: () => void;
  reprovalModalIsOpen: boolean;
  setReprovalModalIsOpen: (value: boolean) => void;
  reproveFarmer: (message: string) => void;
  farmerDetailsIsOpen: boolean;
  closeFarmerDetailsModal: () => void;
  setFarmerDetailsIsOpen: (value: boolean) => void;
  showFarmerDetailActions: boolean;
  setShowFarmerDetailActions: (value: boolean) => void;
  reproveMessageIsOpen: boolean;
  setReproveMessageIsOpen: (value: boolean) => void;
  selectedFarmerId: number | null;
  setSelectedFarmerId: (id: number) => void;
  showReproveMessage: (requestId: number) => void;
  reproveMessage: ReproveMessage | null;
  exportIsFetching: boolean;
  getExportFile: () => Promise<string | undefined>;
}

const FarmersContext = createContext<FarmersContextState>(
  {} as FarmersContextState,
);

export const FarmersProvider: React.FC = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [farmers, setFarmers] = useState<Farmer[]>([]);
  const [selectedTab, setSelectedTab] = useState<Tab>(Tab.waiting);
  const [filters, setFilters] = useState<FilterOptions>({
    status: Tab.waiting as string,
  });
  const [summary, setSummary] = useState<Summary | null>({
    approved: 0,
    rejected: 0,
    waiting: 0,
  });
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [approvalModalIsOpen, setApprovalModalIsOpen] = useState(false);
  const [reprovalModalIsOpen, setReprovalModalIsOpen] = useState(false);
  const [selectedFarmerRequestId, setSelectedFarmerRequestId] = useState<
    number | null
  >(null);
  const [farmerDetailsIsOpen, setFarmerDetailsIsOpen] = useState(false);
  const [showFarmerDetailActions, setShowFarmerDetailActions] = useState(false);
  const [reproveMessageIsOpen, setReproveMessageIsOpen] = useState(false);
  const [selectedFarmerId, setSelectedFarmerId] = useState<number | null>(null);
  const [reproveMessage, setReproveMessage] = useState<ReproveMessage | null>(
    null,
  );
  const [exportIsFetching, setExportIsFetching] = useState(false);

  const { addToast } = useToast();

  const refreshSummary = useCallback(async () => {
    const result = await getSummary(filters);
    setSummary(result);
  }, [filters]);

  const fetchFarmers = useCallback(async (): Promise<void> => {
    setIsFetching(true);
    const { data, pagination: paginationData } = await getFarmers(filters);
    setPagination(paginationData);
    setFarmers(data);
    await refreshSummary();
    setIsFetching(false);
  }, [filters, refreshSummary]);

  const setTab = useCallback((tab: Tab): void => {
    setSelectedTab(tab);
    setFilters(current => ({
      ...current,
      status: tab as string,
      page: 1,
    }));
  }, []);

  const applySearch = useCallback((search: string): void => {
    setFilters(current => ({
      ...current,
      search,
      page: 1,
    }));
  }, []);

  const setPage = useCallback((page: number): void => {
    setFilters(current => ({
      ...current,
      page,
    }));
  }, []);

  const approveFarmer = useCallback(async (): Promise<void> => {
    if (selectedFarmerRequestId) {
      try {
        await approveFarmerRequest(selectedFarmerRequestId);
        addToast({ title: 'Cadastro aprovado com sucesso!', type: 'success' });
        fetchFarmers();
        setFarmerDetailsIsOpen(false);
      } catch (error) {
        addToast({
          title: error.response?.data?.message || 'Erro ao aprovar cadastro',
          type: 'error',
        });
      }
    }
    setSelectedFarmerRequestId(null);
    setApprovalModalIsOpen(false);
  }, [addToast, fetchFarmers, selectedFarmerRequestId]);

  const reproveFarmer = useCallback(
    async (message: string): Promise<void> => {
      if (selectedFarmerRequestId) {
        try {
          await reproveFarmerRequest({
            requestId: selectedFarmerRequestId,
            message: message || '',
          });
          addToast({
            title: 'Cadastro reprovado com sucesso!',
            type: 'success',
          });
          fetchFarmers();
        } catch (error) {
          addToast({
            title: error.response?.data?.message || 'Erro ao reprovar cadastro',
            type: 'error',
          });
        }
      }
      setSelectedFarmerRequestId(null);
      setReprovalModalIsOpen(false);
    },
    [addToast, fetchFarmers, selectedFarmerRequestId],
  );

  const showReproveMessage = useCallback(async (requestId: number): Promise<
    void
  > => {
    const data = await getReproveMotive(requestId);
    setReproveMessage(data);
    setReproveMessageIsOpen(true);
  }, []);

  const closeFarmerDetailsModal = useCallback(() => {
    setFarmerDetailsIsOpen(false);
    setSelectedFarmerId(null);
    setSelectedFarmerRequestId(null);
  }, []);

  const getExportFile = useCallback(async (): Promise<string | undefined> => {
    try {
      setExportIsFetching(true);
      return await getExport(filters);
    } catch (error) {
      addToast({
        title:
          error.response?.data?.message ||
          'Não foi posspivel baixar o relatório!',
        type: 'error',
      });
    } finally {
      setExportIsFetching(false);
    }
  }, [addToast, filters]);

  useEffect(() => {
    fetchFarmers();
  }, [fetchFarmers]);

  return (
    <FarmersContext.Provider
      value={{
        farmers,
        summary,
        isFetching,
        selectedTab,
        setTab,
        applySearch,
        pagination,
        setPage,
        approvalModalIsOpen,
        setApprovalModalIsOpen,
        selectedFarmerRequestId,
        setSelectedFarmerRequestId,
        approveFarmer,
        reprovalModalIsOpen,
        setReprovalModalIsOpen,
        reproveFarmer,
        farmerDetailsIsOpen,
        setFarmerDetailsIsOpen,
        closeFarmerDetailsModal,
        showFarmerDetailActions,
        setShowFarmerDetailActions,
        reproveMessageIsOpen,
        setReproveMessageIsOpen,
        selectedFarmerId,
        setSelectedFarmerId,
        showReproveMessage,
        reproveMessage,
        exportIsFetching,
        getExportFile,
      }}
    >
      {children}
    </FarmersContext.Provider>
  );
};

export const useFarmersContext = (): FarmersContextState => {
  const context = useContext(FarmersContext);

  if (!context) {
    throw new Error('useFarmersContext must be used within a FarmersProvider');
  }

  return context;
};
