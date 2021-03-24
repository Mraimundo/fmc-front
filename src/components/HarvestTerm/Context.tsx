import React, { createContext, useState, useContext, useCallback } from 'react';

import { AgreementTerm, Filters } from 'services/harvest-term/interface';
import { getAgreemenTerms } from 'services/harvest-term';

const tabs = ['Para aprovação', 'Aprovados', 'Reprovados'];

export interface HarvestTermContextState {
  agreementTerms: AgreementTerm[];
  isFetching: boolean;
  fetchAgreementTerms: () => void;
  tabs: string[];
  tabSelected: string;
  selectTab: (tab: string) => void;
  applyFilters: (selectedFilters: Filters) => void;
}

const HarvestTermsContext = createContext<HarvestTermContextState>(
  {} as HarvestTermContextState,
);

export const HarvestTermsProvider: React.FC = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [agreementTerms, setAgreementTerms] = useState<AgreementTerm[]>([]);
  const [filters, setFilters] = useState<Filters>({
    campaignId: 1,
  });
  const [tabSelected, setTabSelected] = useState(tabs[0]);

  const fetchAgreementTerms = useCallback(async () => {
    try {
      setIsFetching(true);
      const result = await getAgreemenTerms(filters);
      setAgreementTerms(result);
    } catch (error) {
      console.log('ON ERROR FETCHING AGREEMENT TERMS', error.message);
    } finally {
      setIsFetching(false);
    }
  }, [filters]);

  const selectTab = useCallback((tab: string) => {
    setTabSelected(tab);
    if (tab === tabs[1]) {
      setFilters(current => ({
        ...current,
        approved: 0,
      }));
    }

    if (tab === tabs[2]) {
      setFilters(current => ({
        ...current,
        approved: 1,
      }));
    }

    if (tab === tabs[0]) {
      setFilters(current => ({
        ...current,
        approved: undefined,
      }));
    }
  }, []);

  const applyFilters = useCallback((selectedFilters: Filters) => {
    const { campaignId, directorship, regionalId } = selectedFilters;
    console.log('ON SELECT FILTER', selectedFilters);
    setFilters(current => ({
      ...current,
      campaignId,
      directorship,
      regionalId,
    }));
  }, []);

  return (
    <HarvestTermsContext.Provider
      value={{
        agreementTerms,
        isFetching,
        fetchAgreementTerms,
        tabs,
        tabSelected,
        selectTab,
        applyFilters,
      }}
    >
      {children}
    </HarvestTermsContext.Provider>
  );
};

export const useHarvestTermsContext = (): HarvestTermContextState => {
  const context = useContext(HarvestTermsContext);

  if (!context) {
    throw new Error(
      'useHavestTermsContext must be used within a HarvestTermProvider',
    );
  }

  return context;
};
