import React from 'react';

import { EstablishmentType } from 'state/modules/point-management/common/types';
import { Wrapper, CongratsText } from './styles';
import TableResume from './TableResume';

interface ResaleCooperativeResumeProps {
  totalPoints: number;
  marketplacePoints: number;
  invoicePoints: number;
  maxInvoicePercentage: number;
  establishmentType: EstablishmentType | '';
  hasInvoicePoints: boolean;
}
const ResaleCooperativeResume: React.FC<ResaleCooperativeResumeProps> = ({
  totalPoints,
  marketplacePoints,
  invoicePoints,
  maxInvoicePercentage,
  establishmentType,
  hasInvoicePoints,
}) => (
  <Wrapper>
    <div>
      <h2>PARABÉNS!</h2>
      <CongratsText>
        Agora você pode acessar o Catálogo de Prêmios e trocar seus pontos
      </CongratsText>
    </div>
    <TableResume
      establishmentType={establishmentType}
      invoicePoints={invoicePoints}
      marketplacePoints={marketplacePoints}
      maxInvoicePercentage={maxInvoicePercentage}
      textTitle="Resumo: você está sem pontos para distribuir"
      totalPoints={totalPoints}
      hasInvoicePoints={hasInvoicePoints}
      zeroedValues
    />
  </Wrapper>
);

export default ResaleCooperativeResume;
