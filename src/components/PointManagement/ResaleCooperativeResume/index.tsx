import React, { useMemo } from 'react';

import { EstablishmentType } from 'state/modules/point-management/common/types';
import { formatPoints } from 'util/points';
import { Wrapper, TotalPointsResume } from './styles';
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
}) => {
  const resaleCooperativeTotalPoints = useMemo(
    () => totalPoints - (invoicePoints + marketplacePoints),
    [totalPoints, invoicePoints, marketplacePoints],
  );

  return (
    <Wrapper>
      <div>
        <h2>PONTOS PARA RESGATE DA {establishmentType}</h2>
        <TotalPointsResume>
          {formatPoints(resaleCooperativeTotalPoints)} PONTOS
        </TotalPointsResume>
      </div>
      <TableResume
        establishmentType={establishmentType}
        invoicePoints={invoicePoints}
        marketplacePoints={marketplacePoints}
        maxInvoicePercentage={maxInvoicePercentage}
        totalPoints={totalPoints}
        hasInvoicePoints={hasInvoicePoints}
      />
    </Wrapper>
  );
};

export default ResaleCooperativeResume;
