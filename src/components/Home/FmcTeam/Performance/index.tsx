import React from 'react';

import CircularProgress from './CircularProgress';
import {
  Wrapper,
  PerformanceWrapper,
  ProgressWrapper,
  IndividualProgressWrapper,
  Label,
  GoalText,
} from './styles';

export interface Props {
  realized: {
    bilingPercent: number;
    pogPercent: number;
    individualPogPercent: number;
  };
}

const Performance: React.FC<Props> = ({ realized }) => {
  const { bilingPercent, pogPercent, individualPogPercent } = realized;

  return (
    <Wrapper>
      <PerformanceWrapper>
        <ProgressWrapper>
          <IndividualProgressWrapper>
            <Label>FATURAMENTO</Label>
            <GoalText>Objetivo US$ 100.000,00</GoalText>
            <GoalText>Realizado US$ 100.000,00</GoalText>
            <CircularProgress color="#FF4C16" percent={bilingPercent || 0} />
          </IndividualProgressWrapper>
          <IndividualProgressWrapper>
            <Label>POG</Label>
            <GoalText>Objetivo US$ 100.000,00</GoalText>
            <GoalText>Realizado US$ 100.000,00</GoalText>
            <CircularProgress color="#25CCE1" percent={pogPercent || 0} />
          </IndividualProgressWrapper>
          <IndividualProgressWrapper>
            <Label>POG</Label>
            <GoalText>Objetivo US$ 100.000,00</GoalText>
            <GoalText>Realizado US$ 100.000,00</GoalText>
            <CircularProgress
              color="#47C246"
              percent={individualPogPercent || 0}
            />
          </IndividualProgressWrapper>
        </ProgressWrapper>
      </PerformanceWrapper>
    </Wrapper>
  );
};

export default Performance;
