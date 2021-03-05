import React from 'react';

import {
  PercentTextStyledWrapper,
  RealizedText,
  PercentageNumber,
} from './styles';

interface PercentageTextProps {
  percent: number;
}
const PercentageText: React.FC<PercentageTextProps> = ({ percent }) => {
  return (
    <PercentTextStyledWrapper>
      <div>
        <RealizedText>Realizado:</RealizedText>
        <PercentageNumber>{percent}%</PercentageNumber>
      </div>
    </PercentTextStyledWrapper>
  );
};

export default PercentageText;
