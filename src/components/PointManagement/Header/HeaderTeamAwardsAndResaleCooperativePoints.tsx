import React from 'react';

import { formatPoints } from 'util/points';
import {
  HeaderImageWrapper,
  WrapperBoxPoints,
  BoxPoints,
  PointsText,
} from './styles';

import headerImage from 'assets/images/point-management/header-image.png';

interface Props {
  resaleCooperativePoints: number;
  teamAwardsPoints: number;
}
const HeaderTeamAwardsAndResaleCooperativePoints: React.FC<Props> = ({
  resaleCooperativePoints,
  teamAwardsPoints,
}: Props) => {
  return (
    <HeaderImageWrapper>
      <img src={headerImage} />
      <WrapperBoxPoints>
        <BoxPoints type="resaleCooperative">
          <PointsText>{`TOTAL REVENDAS ${formatPoints(
            resaleCooperativePoints,
          )}`}</PointsText>
        </BoxPoints>
        <BoxPoints type="teamAwards">
          <PointsText>{`TOTAL PREMIAÇÃO EQUIPE ${formatPoints(
            teamAwardsPoints,
          )}`}</PointsText>
        </BoxPoints>
      </WrapperBoxPoints>
    </HeaderImageWrapper>
  );
};

export default HeaderTeamAwardsAndResaleCooperativePoints;
