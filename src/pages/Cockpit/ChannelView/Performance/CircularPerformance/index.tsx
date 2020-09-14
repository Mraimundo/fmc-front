import React from 'react';
import CircularProgress from 'components/Home/Performance/CircularProgress';

import {
  Container,
  CircularSectionItem,
  PercentCircularCenter,
} from './styles';

interface Props {
  percent: number;
  color: string;
}

const CircularPerformance: React.FC<Props> = ({ percent, color }) => {
  return (
    <Container>
      <CircularSectionItem>
        <CircularProgress color={color} percent={percent}>
          <PercentCircularCenter>
            <div>
              <span>{percent}%</span>
            </div>
          </PercentCircularCenter>
        </CircularProgress>
      </CircularSectionItem>
    </Container>
  );
};

export default CircularPerformance;
