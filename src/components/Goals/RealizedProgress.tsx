import React from 'react';

import { PercentTextStyledWrapper } from './styles';

interface RealizedProgressProps {
  percent: number;
  realized: string;
}
const RealizedProgress: React.FC<RealizedProgressProps> = ({
  percent,
  realized,
}) => {
  return (
    <PercentTextStyledWrapper>
      <div>
        <span>Realizado:</span>
        <span>{percent}%</span>
        <span>{realized}</span>
      </div>
    </PercentTextStyledWrapper>
  );
};

export default RealizedProgress;
