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
} from 'services/producer-approval/interface';
import { Pagination } from 'config/constants/vendavallPaginationInterface';
import { getFarmers, getSummary } from 'services/producer-approval';

export enum Tab {
  waiting = 'wating',
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
  setSelectedFarmerId: (farmerId: number) => void;
  approveFarmer: () => void;
  reprovalModalIsOpen: boolean;
  setReprovalModalIsOpen: (value: boolean) => void;
  reproveFarmer: (reason: string) => void;
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
  const [selectedFarmerId, setSelectedFarmerId] = useState<number | null>(null);

  const setTab = useCallback((tab: Tab): void => {
    setSelectedTab(tab);
    setFilters(current => ({
      ...current,
      status: tab as string,
    }));
  }, []);

  const applySearch = useCallback((search: string): void => {
    setFilters(current => ({
      ...current,
      search,
    }));
  }, []);

  const refreshSummary = useCallback(async () => {
    const result = await getSummary();
    setSummary(result);
  }, []);

  const setPage = useCallback((page: number): void => {
    setFilters(current => ({
      ...current,
      page,
    }));
  }, []);

  const approveFarmer = useCallback((): void => {
    console.log('APPROVED', selectedFarmerId);
    setSelectedFarmerId(null);
    setApprovalModalIsOpen(false);
  }, [selectedFarmerId]);

  const reproveFarmer = useCallback(
    (reason: string): void => {
      console.log('REPROVED', selectedFarmerId, 'REASON', reason);
      setSelectedFarmerId(null);
      setReprovalModalIsOpen(false);
    },
    [selectedFarmerId],
  );

  useEffect(() => {
    const fetchFamers = async () => {
      setIsFetching(true);
      const { data, pagination: paginationData } = await getFarmers(filters);
      setPagination(paginationData);
      setFarmers(data);
      await refreshSummary();
      setIsFetching(false);
    };

    fetchFamers();
  }, [filters, refreshSummary]);

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
        setSelectedFarmerId,
        approveFarmer,
        reprovalModalIsOpen,
        setReprovalModalIsOpen,
        reproveFarmer,
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
