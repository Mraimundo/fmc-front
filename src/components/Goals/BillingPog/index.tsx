import React from 'react';

import checkIcon from 'assets/images/goals/goals-check-icon.svg';
import timesIcon from 'assets/images/goals/goals-times-icon.svg';
import CircularProgress from 'components/Home/Performance/CircularProgress';
import { BillingPog as BillingPogType } from 'state/modules/goals/types';
import Box from '../Box';
import {
  WrapperValues,
  Item,
  ProgressTitle,
  GoalText,
  CircularSectionItem,
} from '../Box/styles';
import RealizedProgress from '../RealizedProgress';

interface BillingPogProps {
  billingPog: BillingPogType | null;
}
const BillingPog: React.FC<BillingPogProps> = ({ billingPog }) => {
  return (
    <Box title="FATURAMENTO E POG" reverse>
      {!!billingPog && (
        <WrapperValues>
          <Item>
            <ProgressTitle>FATURAMENTO</ProgressTitle>
            <GoalText>Objetivo US$ {billingPog.billing.goal}</GoalText>
            <CircularSectionItem>
              <CircularProgress
                color="#FF4C16"
                percent={billingPog.billing.percentage}
              >
                <RealizedProgress
                  percent={billingPog.billing.percentage}
                  realized={`US$ ${billingPog.billing.realized}`}
                />
              </CircularProgress>
            </CircularSectionItem>
          </Item>
          <Item>
            <ProgressTitle>POG</ProgressTitle>
            <GoalText>Objetivo US$ {billingPog.pog.goal}</GoalText>
            <CircularSectionItem>
              <CircularProgress
                color="#25CCE1"
                percent={billingPog.pog.percentage}
              >
                <RealizedProgress
                  percent={billingPog.pog.percentage}
                  realized={`US$ ${billingPog.pog.realized}`}
                />
              </CircularProgress>
            </CircularSectionItem>
          </Item>
          <Item>
            <ProgressTitle>DEVOLUÇÃO %</ProgressTitle>
            <GoalText>{billingPog.devolution.value}</GoalText>
            <CircularSectionItem>
              {billingPog.devolution.checked ? (
                <img src={checkIcon} alt="" title="" />
              ) : (
                <img src={timesIcon} alt="" title="" />
              )}
            </CircularSectionItem>
          </Item>
        </WrapperValues>
      )}
    </Box>
  );
};

export default BillingPog;
