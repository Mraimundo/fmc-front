import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-grid-system';

import * as selectors from 'state/modules/point-management/common/selectors';
import * as actions from 'state/modules/point-management/common/actions';
import HeaderResaleCooperativePoints from './HeaderResaleCooperativePoints';
import HeaderWithAutonomyPoints from './HeaderWithAutonomyPoints';
import HeaderTeamAwardsAndResaleCooperativePoints from './HeaderTeamAwardsAndResaleCooperativePoints';

const Header: React.FC = () => {
  const [
    pointsToDistribute,
    totalPointsTeamAwards,
    totalPointsResaleCooperative,
    isAllowedToStartDistribution,
    isResaleCooperativePointsOnly,
    isResaleCooperativeAndTeamAwardPoints,
    hasAutonomyToDistribute,
    isReadyToDistribute,
  ] = [
    useSelector(selectors.getPointsToDistribute),
    useSelector(selectors.getTotalPointsTeamAwards),
    useSelector(selectors.getTotalPointsResaleCooperative),
    useSelector(selectors.getIsAllowedToStartDistribution),
    useSelector(selectors.getIsResaleCooperativePointsOnly),
    useSelector(selectors.getIsResaleCooperativeAndTeamAwardPoints),
    useSelector(selectors.getHasAutonomyToDistribute),
    useSelector(selectors.getIsReadyToDistribute),
  ];

  const dispatch = useDispatch();

  const handleReadyToDistribute = useCallback(() => {
    dispatch(actions.setIsReadyToDistribute(true));
  }, []);

  const handleSetResaleCooperativePoints = useCallback((points: number) => {
    dispatch(actions.setTotalPointsResaleCooperative(points));
  }, []);

  const handleSetTeamAwardsPoints = useCallback((points: number) => {
    dispatch(actions.setTotalPointsTeamAwards(points));
  }, []);

  const { general, resaleCooperative, teamAwards } = pointsToDistribute;

  return (
    <Container>
      {isResaleCooperativePointsOnly && (
        <HeaderResaleCooperativePoints
          points={resaleCooperative?.points || 0}
        />
      )}
      {hasAutonomyToDistribute  && (
        <HeaderWithAutonomyPoints
          generalPoints={general || 0}
          totalResaleCooperativePoints={totalPointsResaleCooperative}
          totalTeamAwardPoints={totalPointsTeamAwards}
          isAllowedToEdit={isReadyToDistribute}
          isAllowedToStartDistribution={isAllowedToStartDistribution}
          onReadyToDistribute={handleReadyToDistribute}
          onSetResaleCooperativePoints={handleSetResaleCooperativePoints}
          onSetTeamAwardPoints={handleSetTeamAwardsPoints}
        />
      )}
      {isResaleCooperativeAndTeamAwardPoints && (
        <HeaderTeamAwardsAndResaleCooperativePoints
          resaleCooperativePoints={resaleCooperative?.points || 0}
          teamAwardsPoints={teamAwards?.points || 0}
        />
      )}
    </Container>
  );
};

export default Header;
