import React, { useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-grid-system';

import { EstablishmentTypes } from 'config/constants';
import * as selectors from 'state/modules/point-management/common/selectors';
import * as actions from 'state/modules/point-management/common/actions';
import HeaderResaleCooperativePoints from './HeaderResaleCooperativePoints';
import HeaderWithAutonomyPoints from './HeaderWithAutonomyPoints';
import HeaderTeamAwardsAndResaleCooperativePoints from './HeaderTeamAwardsAndResaleCooperativePoints';

interface HeaderProps {
  establishmentType: EstablishmentTypes;
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

  // using different header to change layout only
  const headerWithAutonomyPointsAfterConfirm = useMemo(
    () => (
      <HeaderTeamAwardsAndResaleCooperativePoints
        resaleCooperativePoints={totalPointsResaleCooperative}
        teamAwardsPoints={totalPointsTeamAwards}
        establishmentType={establishmentType}
      />
    ),
    [totalPointsResaleCooperative, totalPointsTeamAwards, establishmentType],
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
      {hasAutonomyToDistribute && !isReadyToDistribute && (
        <HeaderWithAutonomyPoints
          generalPoints={general || 0}
          totalResaleCooperativePoints={totalPointsResaleCooperative}
          totalTeamAwardPoints={totalPointsTeamAwards}
          isAllowedToStartDistribution={isAllowedToStartDistribution}
          onReadyToDistribute={handleReadyToDistribute}
          onSetResaleCooperativePoints={handleSetResaleCooperativePoints}
          onSetTeamAwardPoints={handleSetTeamAwardsPoints}
          establishmentType={establishmentType}
        />
      )}
      {hasAutonomyToDistribute && isReadyToDistribute && headerWithAutonomyPointsAfterConfirm}
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
