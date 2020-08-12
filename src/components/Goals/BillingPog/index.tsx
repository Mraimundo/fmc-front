import React from 'react';

import checkIcon from 'assets/images/goals/goals-check-icon.svg';
import CircularProgress from 'components/Home/Performance/CircularProgress';
import Box from '../Box';
import {
  WrapperValues,
  Item,
  ProgressTitle,
  GoalText,
  CircularSectionItem,
} from '../Box/styles';

const BillingPog: React.FC = () => {
  return (
    <Box title="FATURAMENTO E PROG" reverse>
      <WrapperValues>
        <Item>
          <ProgressTitle>FATURAMENTO</ProgressTitle>
          <GoalText>Objetivo US$ 100.000,00</GoalText>
          <CircularSectionItem>
            <CircularProgress color="#FF4C16" percent={0} />
          </CircularSectionItem>
        </Item>
        <Item>
          <ProgressTitle>POG</ProgressTitle>
          <GoalText>Objetivo US$ 100.000,00</GoalText>
          <CircularSectionItem>
            <CircularProgress color="#25CCE1" percent={0} />
          </CircularSectionItem>
        </Item>
        <Item>
          <ProgressTitle>DEVOLUÇÃO %</ProgressTitle>
          <GoalText>Até 5%</GoalText>
          <CircularSectionItem>
            <img src={checkIcon} alt="" title="" />
          </CircularSectionItem>
        </Item>
      </WrapperValues>
    </Box>
  );
};

export default BillingPog;
