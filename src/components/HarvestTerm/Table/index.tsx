import React, { useEffect } from 'react';

import { useHavestTermsContext } from 'components/HarvestTerm/Context';
import { Table } from './styles';
import header from './header';

const AgreementTermsTable: React.FC = () => {
  const {
    agreementTerms,
    isFetching,
    fetchAgreementTerms,
  } = useHavestTermsContext();

  useEffect(() => {
    fetchAgreementTerms();
  }, [fetchAgreementTerms]);

  return (
    <Table
      headers={header}
      data={agreementTerms}
      isFetching={isFetching}
      noResultText="Nenhuma Pesquisa encontrada"
    />
  );
};

export default AgreementTermsTable;
