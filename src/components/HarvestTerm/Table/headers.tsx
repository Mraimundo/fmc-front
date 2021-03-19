import React from 'react';

import AgreementDownload from 'components/HarvestTerm/Table/Actions/AgreementDownload';
import Negotiation from 'components/HarvestTerm/Table/Actions/Negotiation';
import Management from 'components/HarvestTerm/Table/Actions/Management';

export default () => {
  return [
    {
      column: 'Safra',
      dataValue: 'harvest',
    },
    {
      column: 'Grupo de Cliente',
      dataValue: 'clientGroup',
    },
    {
      column: 'Acordo',
      dataValue: 'agreement',
      fn: (agreement: string) => <AgreementDownload url={agreement} />,
    },
    {
      column: 'Solicitado em',
      dataValue: 'requestedAt',
    },
    {
      column: 'Negociação',
      dataValue: 'id',
      fn: (id: string) => <Negotiation agreementTermId={id} />,
    },
    {
      column: 'Status',
      dataValue: 'id',
      fn: (id: string) => <Management agreementTermId={id} />,
    },
  ];
};
