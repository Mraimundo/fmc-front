import React, { useCallback } from 'react';

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

interface MyPointsProps {
  isParticipant: boolean;
}
const MyPoints: React.FC<MyPointsProps> = ({ isParticipant }) => {
  const handleClickExtract = useCallback(() => {
    if (isParticipant) {
      return history.push(routeMap.extract.my);
    }

    return history.push(routeMap.extract.channel);
  }, [isParticipant]);

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
      <Button type="submit" buttonRole="primary" onClick={handleClickExtract}>
        VER EXTRATO
      </Button>
    </Wrapper>
  );
};

export default MyPoints;
