import React, { useMemo } from 'react';

import { EstablishmentType } from 'state/modules/point-management/common/types';
import { formatPoints } from 'util/points';
import { ResumeTableWrapper, ResumeTableTitle, ResumeTable } from './styles';

interface TableResumeProps {
  establishmentType: EstablishmentType | '';
  totalPoints: number;
  marketplacePoints: number;
  invoicePoints: number;
  maxInvoicePercentage: number;
  textTitle?: string;
  zeroedValues?: boolean;
}
const TableResume: React.FC<TableResumeProps> = ({
  establishmentType,
  totalPoints,
  maxInvoicePercentage,
  marketplacePoints,
  invoicePoints,
  textTitle = 'Resumo',
  zeroedValues = false,
}) => {
  const total = useMemo(() => {
    if (zeroedValues) return `0 pontos`;
    return formatPoints(totalPoints);
  }, [totalPoints, zeroedValues, formatPoints]);

  const invoice = useMemo(() => {
    if (zeroedValues) return `0 pontos`;

    return maxInvoicePercentage
      ? `${formatPoints(invoicePoints)} (máx. ${maxInvoicePercentage}%)`
      : 'não permitido';
  }, [formatPoints, invoicePoints, maxInvoicePercentage, zeroedValues]);

  const marketplace = useMemo(() => {
    if (zeroedValues) return `0 pontos`;
    return formatPoints(marketplacePoints);
  }, [formatPoints, marketplacePoints, zeroedValues]);

  return (
    <ResumeTableWrapper>
      <ResumeTableTitle>{textTitle}</ResumeTableTitle>
      <ResumeTable>
        <li>
          <span>{`TOTAL PARA ${establishmentType}`}</span>
          <span>{total}</span>
        </li>
        <li>
          <span>DESCONTO DE DUPLICATA</span>
          <span>{invoice}</span>
        </li>
        <li>
          <span>MARKETPLACE</span>
          <span>{marketplace}</span>
        </li>
      </ResumeTable>
    </ResumeTableWrapper>
  );
};

export default TableResume;
