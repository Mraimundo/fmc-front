import React, { useMemo } from 'react';

import { EstablishmentTypes } from 'config/constants';
import { formatPoints } from 'util/points';
import headerImage from 'assets/images/point-management/header-image.png';

import {
  HeaderImageWrapper,
  WrapperBoxPoints,
  BoxPoints,
  PointsText,
} from './styles';

interface Props {
  resaleCooperativePoints: number;
  teamAwardsPoints: number;
  establishmentType: EstablishmentTypes;
}
const HeaderTeamAwardsAndResaleCooperativePoints: React.FC<Props> = ({
  resaleCooperativePoints,
  teamAwardsPoints,
  establishmentType,
}: Props) => {
  const resaleCooperativeText = useMemo(
    () =>
      `TOTAL ${establishmentType} ${formatPoints(
        resaleCooperativePoints,
      )} PONTOS`,
    [establishmentType, resaleCooperativePoints],
  );

  const teamAwardsText = useMemo(
    () => `TOTAL PREMIAÇÃO EQUIPE ${formatPoints(teamAwardsPoints)} PONTOS`,
    [teamAwardsPoints],
  );

  return (
    <HeaderImageWrapper>
      <img src={headerImage} alt="" title="" />
      <WrapperBoxPoints>
        <BoxPoints type="resaleCooperative">
          <PointsText>{resaleCooperativeText}</PointsText>
        </BoxPoints>
        <BoxPoints type="teamAwards">
          <PointsText>{teamAwardsText}</PointsText>
        </BoxPoints>
      </WrapperBoxPoints>
    </HeaderImageWrapper>
  );
};

export default HeaderTeamAwardsAndResaleCooperativePoints;
