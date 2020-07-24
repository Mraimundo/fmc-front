import React from 'react';

import { formatPoints } from 'util/points';
import {
  HeaderImageWrapper,
  WrapperBoxPoints,
  BoxPoints,
  PointsText,
} from './styles';

import { EstablishmentType } from 'state/modules/point-management/common/types';
import headerImage from 'assets/images/point-management/header-image.png';

interface Props {
  resaleCooperativePoints: number;
  teamAwardsPoints: number;
  establishmentType: EstablishmentType | '';
}
const HeaderTeamAwardsAndResaleCooperativePoints: React.FC<Props> = ({
  resaleCooperativePoints,
  teamAwardsPoints,
  establishmentType,
}: Props) => {
  return (
    <HeaderImageWrapper>
      <img src={headerImage} />
      <WrapperBoxPoints>
        <BoxPoints type="resaleCooperative">
          <PointsText>{`TOTAL ${establishmentType} ${formatPoints(
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
