import React, { useMemo } from 'react';

import { EstablishmentType } from 'state/modules/point-management/common/types';
import { formatPoints } from 'util/points';
import {
  Wrapper,
  TotalPointsResume,
  ResumeTableWrapper,
  ResumeTableTitle,
  ResumeTable,
} from './styles';

interface ResaleCooperativeResumeProps {
  totalPoints: number;
  marketplacePoints: number;
  invoicePoints: number;
  maxInvoicePercentage: number;
  establishmentType: EstablishmentType | '';
}
const ResaleCooperativeResume: React.FC<ResaleCooperativeResumeProps> = ({
  totalPoints,
  marketplacePoints,
  invoicePoints,
  maxInvoicePercentage,
  establishmentType,
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
          {formatPoints(resaleCooperativeTotalPoints)}
        </TotalPointsResume>
      </div>
      <ResumeTableWrapper>
        <ResumeTableTitle>Resumo</ResumeTableTitle>
        <ResumeTable>
          <li>
            <span>TOTAL PARA {establishmentType}</span>
            <span>{formatPoints(totalPoints)}</span>
          </li>
          <li>
            <span>DESCONTO DE DUPLICATA</span>
            <span>
              {maxInvoicePercentage
                ? `${formatPoints(
                    invoicePoints,
                  )} (máx. ${maxInvoicePercentage}%)`
                : 'não permitido'}
            </span>
          </li>
          <li>
            <span>MARKETPLACE</span>
            <span>{formatPoints(marketplacePoints)}</span>
          </li>
        </ResumeTable>
      </ResumeTableWrapper>
    </Wrapper>
  );
};

export default ResaleCooperativeResume;
