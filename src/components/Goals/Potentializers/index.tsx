import React from 'react';

import CircularProgress from 'components/Home/Performance/CircularProgress';
import Box from '../Box';
import {
  WrapperValues,
  Item,
  ProgressTitle,
  GoalText,
  CircularSectionItem,
} from '../Box/styles';

const Potentializers: React.FC = () => {
  return (
    <Box title="POTENCIALIZADORES">
      <WrapperValues>
        <Item>
          <ProgressTitle>NOME DO PRODUTO 1</ProgressTitle>
          <GoalText>Objetivo 100.000 Kg/L</GoalText>
          <CircularSectionItem>
            <CircularProgress color="#7C21F4" percent={0} />
          </CircularSectionItem>
        </Item>
        <Item>
          <ProgressTitle>NOME DO PRODUTO 2</ProgressTitle>
          <GoalText>Objetivo 100.000 Kg/L</GoalText>
          <CircularSectionItem>
            <CircularProgress color="#22BF43" percent={0} />
          </CircularSectionItem>
        </Item>
        <Item>
          <ProgressTitle>NOME DO PRODUTO 3</ProgressTitle>
          <GoalText>Objetivo 100.000 Kg/L</GoalText>
          <CircularSectionItem>
            <CircularProgress color="#E5C900" percent={0} />
          </CircularSectionItem>
        </Item>
      </WrapperValues>
    </Box>
  );
};

export default Potentializers;
