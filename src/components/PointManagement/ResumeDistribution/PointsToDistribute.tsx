import React from 'react';
import { PointsInput } from 'components/PointManagement';
import { InputPointsToDistribute } from './styles';

interface Props {
  pointsToDistribute: number;
  onChange(v: number): void;
  maxLength: number;
}
const PointsToDistribute: React.FC<Props> = ({
  pointsToDistribute,
  onChange,
  maxLength,
}) => {
  return (
    <PointsInput
      placeholder="DIGITE AQUI O VALOR"
      onChange={onChange}
      value={pointsToDistribute}
      component={InputPointsToDistribute}
      maxLength={maxLength}
    />
  );
};

export default PointsToDistribute;
