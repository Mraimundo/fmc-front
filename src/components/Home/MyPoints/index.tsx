import React from 'react';

import routeMap from 'routes/route-map';
import history from 'services/history';
import { Button } from 'components/shared';
import {
  Wrapper,
  Period,
  PeriodText,
  PointsWrapper,
  TotalPointsText,
  Points,
} from './styles';

const MyPoints: React.FC = () => {
  return (
    <Wrapper style={{ color: '#000' }}>
      <Period>
        <span>Safra</span>
        <PeriodText>2020/21</PeriodText>
      </Period>
      <PointsWrapper>
        <TotalPointsText>Total pontos</TotalPointsText>
        <Points>0</Points>
      </PointsWrapper>
      <Button
        type="submit"
        buttonRole="primary"
        onClick={() => history.push(routeMap.extract.my)}
      >
        VER EXTRATO
      </Button>
    </Wrapper>
  );
};

export default MyPoints;
