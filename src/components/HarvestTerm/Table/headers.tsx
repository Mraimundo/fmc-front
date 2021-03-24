import React, { useCallback } from 'react';

import AgreementDownload from 'components/HarvestTerm/Table/Actions/AgreementDownload';
import Negotiation from 'components/HarvestTerm/Table/Actions/Negotiation';
import Management from 'components/HarvestTerm/Table/Actions/Management';
import ReproveReason from 'components/HarvestTerm/Table/Actions/ReproveReason';

interface HeaderProps {
  tabSelected: string;
  tabs: string[];
}

const harvest = [
  {
    column: 'Safra',
    dataValue: 'harvest',
  },
];

const clientGroup = [
  {
    column: 'Grupo de Cliente',
    dataValue: 'clientGroup',
  },
];

const agreementColumn = [
  {
    column: 'Acordo',
    dataValue: 'agreement',
    fn: (agreement: string) => <AgreementDownload url={agreement} />,
  },
];

const requestedAt = [
  {
    column: 'Solicitado em',
    dataValue: 'requestedAt',
  },
];

const negotiationColumn = [
  {
    column: 'Negociação',
    dataValue: 'id',
    fn: (id: string) => <Negotiation agreementTermId={id} />,
  },
];

const status = [
  {
    column: 'Status',
    dataValue: 'id',
    fn: (id: string) => <Management agreementTermId={id} />,
  },
];

const approvedAt = [
  {
    column: 'Aprovado em',
    dataValue: 'modified',
  },
];

const reproveddAt = [
  {
    column: 'Reprovado em',
    dataValue: 'modified',
  },
];

const reproveReason = [
  {
    column: 'Comentário',
    dataValue: 'id',
    fn: (id: string) => <ReproveReason agreementTermId={id} />,
  },
];

export default (headerProps: HeaderProps) => {
  const { tabSelected, tabs } = headerProps;

  const getTabIndex = useCallback(() => {
    return tabs.indexOf(tabSelected);
  }, [tabSelected, tabs]);

  switch (getTabIndex()) {
    case 1:
      return [
        ...clientGroup,
        ...agreementColumn,
        ...requestedAt,
        ...approvedAt,
        ...negotiationColumn,
      ];
    case 2:
      return [
        ...clientGroup,
        ...agreementColumn,
        ...requestedAt,
        ...reproveddAt,
        ...reproveReason,
      ];
    default:
      return [
        ...harvest,
        ...clientGroup,
        ...agreementColumn,
        ...requestedAt,
        ...negotiationColumn,
        ...status,
      ];
  }
};
