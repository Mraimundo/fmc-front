import React from 'react';

import { PointsInput } from 'components/PointManagement';
import invoiceImage from 'assets/images/point-management/invoice-image.png';
import { Wrapper, Image, Title, Input } from './styles';

interface InvoicePointsProps {
  onChange(points: number): void;
  invoicePoints: number;
  maxLength?: number | null;
  disabled: boolean;
}
const InvoicePoints: React.FC<InvoicePointsProps> = ({
  onChange,
  invoicePoints,
  maxLength,
  disabled = false,
}) => {
  return (
    <Wrapper>
      <Title>DESCONTO EM DUPLICATA FUTURA</Title>
      <Image src={invoiceImage} alt="" title="" />
      <PointsInput
        onChange={onChange}
        value={invoicePoints}
        placeholder="DIGITE O VALOR"
        component={Input}
        maxLength={maxLength}
        disabled={disabled}
      />
    </Wrapper>
  );
};

export default InvoicePoints;
