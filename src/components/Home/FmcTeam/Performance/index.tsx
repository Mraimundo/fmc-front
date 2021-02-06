import React from 'react';

import { formatPoints } from 'util/points';
import { Performance as IPerformance } from 'state/modules/home/types';

import CircularProgress from './CircularProgress';
import {
  Wrapper,
  PerformanceWrapper,
  ProgressWrapper,
  IndividualProgressWrapper,
  Label,
  GoalText,
} from './styles';

interface Props {
  realized: IPerformance;
}

const Performance: React.FC<Props> = ({ realized }) => {
  const {
    revenues: _revenues,
    pog: _pog,
    individualPog: _individualPog,
  } = realized;

  const revenues = {
    goal: formatPoints(_revenues.goal),
    reached: formatPoints(_revenues.reached),
    percentage: _revenues.percentage,
  };

  const pog = {
    goal: formatPoints(_pog.goal),
    reached: formatPoints(_pog.reached),
    percentage: _pog.percentage,
  };

  const individualPog = {
    goal: formatPoints(_individualPog.goal),
    reached: formatPoints(_individualPog.reached),
    percentage: _individualPog.percentage,
  };

  return (
    <Wrapper>
      <PerformanceWrapper>
        <ProgressWrapper>
          <IndividualProgressWrapper>
            <Label>FATURAMENTO</Label>
            <GoalText>Objetivo US$ {revenues.goal}</GoalText>
            <GoalText>Realizado US$ {revenues.reached}</GoalText>
            <CircularProgress
              color="#FF4C16"
              percent={revenues.percentage || 0}
            />
          </IndividualProgressWrapper>
          <IndividualProgressWrapper>
            <Label>POG</Label>
            <GoalText>Objetivo US$ {pog.goal}</GoalText>
            <GoalText>Realizado US$ {pog.reached}</GoalText>
            <CircularProgress color="#25CCE1" percent={pog.percentage || 0} />
          </IndividualProgressWrapper>
          <IndividualProgressWrapper>
            <Label>POG</Label>
            <GoalText>Objetivo US$ {individualPog.goal}</GoalText>
            <GoalText>Realizado US$ {individualPog.reached}</GoalText>
            <CircularProgress
              color="#47C246"
              percent={individualPog.percentage || 0}
            />
          </IndividualProgressWrapper>
        </ProgressWrapper>
      </PerformanceWrapper>
    </Wrapper>
  );
};

export default Performance;
