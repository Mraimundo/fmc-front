import React, {
  useEffect,
  createContext,
  useState,
  useContext,
  useCallback,
} from 'react';

import { AgreementTerm, Filters } from 'services/harvest-term/interface';
import { getAgreemenTerms } from 'services/harvest-term';

export interface HarvestTermContextState {
  agreementTerms: AgreementTerm[];
  isFetching: boolean;
  fetchAgreementTerms: () => void;
}

const HarvestTermsContext = createContext<HarvestTermContextState>(
  {} as HarvestTermContextState,
);

export const HarvestTermsProvider: React.FC = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [agreementTerms, setAgreementTerms] = useState<AgreementTerm[]>([]);
  const [filters, setFilters] = useState<Filters>({
    approved: 0,
    campaignId: 1,
  });

  const fetchAgreementTerms = useCallback(async () => {
    try {
      setIsFetching(true);
      const result = await getAgreemenTerms(filters);
      console.log('FETCHED FILTERS', result);
      setAgreementTerms(result);
    } catch (error) {
      console.log('ON ERROR FETCHING AGREEMENT TERMS', error.message);
    } finally {
      setIsFetching(false);
    }
  }, [filters]);

  return (
    <HarvestTermsContext.Provider
      value={{ agreementTerms, isFetching, fetchAgreementTerms }}
    >
      {children}
    </HarvestTermsContext.Provider>
  );
};

export const useHavestTermsContext = (): HarvestTermContextState => {
  const context = useContext(HarvestTermsContext);

  if (!context) {
    throw new Error(
      'useHavestTermsContext must be used within a HarvestTermProvider',
    );
  }

  return context;
};
