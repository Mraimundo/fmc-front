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

  useEffect(() => {
    const fetchFamers = async () => {
      setIsFetching(true);
      const result = await getFarmers(filters);
      setFarmers(result);
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
