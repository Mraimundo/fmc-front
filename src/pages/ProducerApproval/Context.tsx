import React, {
  useEffect,
  createContext,
  useState,
  useContext,
  useCallback,
} from 'react';

import { Farmer, FilterOptions } from 'services/producer-approval/interface';
import { getFarmers } from 'services/producer-approval';

export enum Tab {
  waiting = 'wating',
  approved = 'approved',
  rejected = 'rejected',
}

interface FarmersContextState {
  farmers: Farmer[];
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

  useEffect(() => {
    const fetchFamers = async () => {
      setIsFetching(true);
      const result = await getFarmers(filters);
      setFarmers(result);
      console.log('FETCHING FARMERS', result);
      setIsFetching(false);
    };

    fetchFamers();
  }, [filters]);

  return (
    <FarmersContext.Provider
      value={{
        farmers,
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
