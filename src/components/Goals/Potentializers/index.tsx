import React from 'react';

import CircularProgress from 'components/Home/Performance/CircularProgress';
import { Potentializer } from 'state/modules/goals/types';
import Box from '../Box';
import {
  WrapperValues,
  Item,
  ProgressTitle,
  GoalText,
  CircularSectionItem,
} from '../Box/styles';
import RealizedProgress from '../RealizedProgress';

const colors = ['#7C21F4', '#22BF43', '#E5C900'];

interface PotentializersProps {
  potentializers: Potentializer[] | null;
}
const Potentializers: React.FC<PotentializersProps> = ({ potentializers }) => {
  return (
    <Box title="POTENCIALIZADORES">
      {!!potentializers && (
        <WrapperValues>
          {potentializers.map((potentializer, index) => (
            <Item key={potentializer.name}>
              <ProgressTitle>
                {potentializer.name}
                <span>®</span>
              </ProgressTitle>
              <GoalText>Objetivo {potentializer.goal} L</GoalText>
              <CircularSectionItem>
                <CircularProgress
                  color={colors[index]}
                  percent={potentializer.percentage}
                >
                  <RealizedProgress
                    percent={potentializer.percentage}
                    realized={`${potentializer.realized} L`}
                  />
                </CircularProgress>
              </CircularSectionItem>
            </Item>
          ))}
        </WrapperValues>
      )}
    </Box>
  );
};

export default Potentializers;
