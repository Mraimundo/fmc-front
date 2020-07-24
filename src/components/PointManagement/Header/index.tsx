import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-grid-system';

import * as selectors from 'state/modules/point-management/common/selectors';
import * as actions from 'state/modules/point-management/common/actions';
import { EstablishmentType } from 'state/modules/point-management/common/types';
import HeaderResaleCooperativePoints from './HeaderResaleCooperativePoints';
import HeaderWithAutonomyPoints from './HeaderWithAutonomyPoints';
import HeaderTeamAwardsAndResaleCooperativePoints from './HeaderTeamAwardsAndResaleCooperativePoints';

interface HeaderProps {
  establishmentType: EstablishmentType | '';
}
const Header: React.FC<HeaderProps> = ({ establishmentType }) => {
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
  }, [dispatch]);

  const handleSetResaleCooperativePoints = useCallback(
    (points: number) => {
      dispatch(actions.setTotalPointsResaleCooperative(points));
    },
    [dispatch],
  );

  const handleSetTeamAwardsPoints = useCallback(
    (points: number) => {
      dispatch(actions.setTotalPointsTeamAwards(points));
    },
    [dispatch],
  );

  const { general, resaleCooperative, teamAwards } = pointsToDistribute;

  return (
    <Container>
      {isResaleCooperativePointsOnly && (
        <HeaderResaleCooperativePoints
          points={resaleCooperative?.points || 0}
          establishmentType={establishmentType}
        />
      )}
      {hasAutonomyToDistribute && (
        <HeaderWithAutonomyPoints
          generalPoints={general || 0}
          totalResaleCooperativePoints={totalPointsResaleCooperative}
          totalTeamAwardPoints={totalPointsTeamAwards}
          isAllowedToEdit={isReadyToDistribute}
          isAllowedToStartDistribution={isAllowedToStartDistribution}
          onReadyToDistribute={handleReadyToDistribute}
          onSetResaleCooperativePoints={handleSetResaleCooperativePoints}
          onSetTeamAwardPoints={handleSetTeamAwardsPoints}
          establishmentType={establishmentType}
        />
      )}
      {isResaleCooperativeAndTeamAwardPoints && (
        <HeaderTeamAwardsAndResaleCooperativePoints
          resaleCooperativePoints={resaleCooperative?.points || 0}
          teamAwardsPoints={teamAwards?.points || 0}
          establishmentType={establishmentType}
        />
      )}
    </Container>
  );
};

export default Header;
