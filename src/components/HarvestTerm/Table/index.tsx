import React, { useEffect } from 'react';

import { useHarvestTermsContext } from 'components/HarvestTerm/Context';
import { Table } from './styles';
import headers from './headers';

const AgreementTermsTable: React.FC = () => {
  const {
    agreementTerms,
    isFetching,
    tabSelected,
    tabs,
    fetchAgreementTerms,
  } = useHarvestTermsContext();

  useEffect(() => {
    fetchAgreementTerms();
  }, [fetchAgreementTerms]);

  return (
    <Table
      headers={headers({ tabSelected, tabs })}
      data={agreementTerms}
      isFetching={isFetching}
      noResultText="Nenhuma Pesquisa encontrada"
    />
  );
};

export default AgreementTermsTable;
